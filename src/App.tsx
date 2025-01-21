import { AppContext, AppLayoutProvider, useCreateTheme } from 'eworldes-ui-toolkit';
import { useSelector } from "react-redux";
import { NAVIGATION } from "config/navigationConfig";
import { selectLayout } from "selectors";
import { defaultThemes } from "./theme";
import { router } from "./routing";
import 'styles/app.css';
import { RouterProvider } from 'react-router-dom';

function App() {
  const { themeMode } = useSelector(selectLayout);
  //@ts-ignore
  const theme = useCreateTheme(defaultThemes[themeMode || 'light']);
  return (
    <AppContext.Provider value={{ router }}>
      <AppLayoutProvider navigation={NAVIGATION} theme={theme} router={router}>
        <RouterProvider router={router} />
      </AppLayoutProvider>
    </AppContext.Provider>
  );
}

export default App;
