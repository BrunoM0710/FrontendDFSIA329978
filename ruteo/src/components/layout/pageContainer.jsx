import { Outlet } from "react-router";
import Navbar from "./Navbar.jsx";

const PageContainer = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PageContainer;