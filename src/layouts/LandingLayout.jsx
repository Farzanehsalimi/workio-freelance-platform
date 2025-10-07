import { Outlet } from "react-router-dom";
import LandingFooter from "./LandingFooter";
import LandingHeader from "./LandingHeader";

function LandingLayout() {
  return (
    <div className="h-screen">
      <div className="">
        <LandingHeader />
        <Outlet />
        <LandingFooter />
      </div>
    </div>
  );
}

export default LandingLayout;
