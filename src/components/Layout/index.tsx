import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import { StyledContainer } from "./styles";

function PageLayout() {
  return (
    <StyledContainer maxWidth="lg">
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: "1",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </StyledContainer>
  );
}

export default PageLayout;
