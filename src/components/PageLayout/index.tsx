import { Outlet } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

function PageLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default PageLayout;
