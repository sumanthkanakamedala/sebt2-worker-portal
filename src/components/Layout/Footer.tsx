import { Stack, Typography, Link } from "eworldes-ui-toolkit";
import AppVersion from "../AppVersion";
const Footer = () => {
    return (
        <>
            <Stack direction="row" alignItems="center">
                <AppVersion />
            </Stack>
            <Stack direction="row" alignItems="center">
                <Link href="">
                    <Typography title="Cotact us" color="secondry" variant="subtitle1" />
                </Link>

            </Stack>
        </>
    );
}

export default Footer;