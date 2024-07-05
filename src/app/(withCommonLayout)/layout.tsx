

import Footer from "@/components/Footer/Footer";
import { Nav } from "@/components/common/Navbar";
import { Box } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Nav />
            <Box >{children}</Box>
            <Footer />
        </>
    );
};

export default CommonLayout;
