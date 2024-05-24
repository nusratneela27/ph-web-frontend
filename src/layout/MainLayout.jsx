import Header from "../components/Shared/Header";
import FooterUI from "../components/Shared/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <FooterUI></FooterUI>
    </div>
  );
};

export default MainLayout;
