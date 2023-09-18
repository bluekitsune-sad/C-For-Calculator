import { Outlet, Link } from "react-router-dom";
import Home from "../Home/Home";

const Layout = () => {
  return (
    <>
      <Link to="/">
        <Home />
      </Link>

      <Outlet />
    </>
  );
};

export default Layout;
