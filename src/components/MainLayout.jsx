import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default MainLayout;
