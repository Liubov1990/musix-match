import { Outlet } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

function PageLayout() {
  return (
    <Container maxWidth="lg" sx={{ py: 2, height: "100vh" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
}

export default PageLayout;
