// import { Navigation, } from 'core/types';
import { Icon, Navigation } from 'eworldes-ui-toolkit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import GroupIcon from '@mui/icons-material/Group';
import ManIcon from '@mui/icons-material/Man';
export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'home',
    title: 'My Tasks',
    link: "/home",
    icon: <Icon iconName='home' />,
    children: [
      {
        segment: "xyz",
        title: "Queue Information",
        icon: <Icon iconName='event' />,
      },
      {
        segment: "CallCenterActivities",
        title: "Call Center Activities",
        icon: <Icon iconName='event' />,
      },
    ],
  },
  {
    segment: 'applications',
    title: 'Applications',
    link: "/applications",
    icon: <FileCopyIcon/>
  },
  {
    segment: 'households',
    title: 'Households',
    link: "/calender",
    icon: <GroupIcon />
  },
  {
    segment: 'students',
    title: 'Students',
    link: "/calender",
    icon: <ManIcon />
  },
];