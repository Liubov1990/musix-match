import { Outlet } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Main from "../../layout/Main";

function PageLayout() {
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
}

export default PageLayout;
