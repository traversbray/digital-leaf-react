import { Outlet } from "react-router-dom";
import MainHeader from "../components/Common/MainHeader";
import "./../assets/styles/utils/_reset.scss";
import "./../assets/styles/common/_global.scss";
import "./../assets/styles/common/_helpers.scss";


function RootLayout() {
  return (
    <>
      <MainHeader />
      <div className="wrap">
        <div className="content">
          <main className="main">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default RootLayout;
