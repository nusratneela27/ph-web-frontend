import Header from "../components/Shared/Header";
import FooterUI from "../components/Shared/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <FooterUI></FooterUI>
    </>
  );
};

export default MainLayout;
