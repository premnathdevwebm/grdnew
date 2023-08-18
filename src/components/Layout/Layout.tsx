import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import VerticalNav from "components/VerticalNav/VerticalNav";

function Layout(): React.ReactElement {
  return (
    <>
    <VerticalNav />
      <Header />
        <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
