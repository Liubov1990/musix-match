import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Container from "@mui/material/Container";
import Main from "../Main";

function PageLayout() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: "320px",
        minHeight: "100vh",
        pt: 2,
      }}
    >
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
}

export default PageLayout;
