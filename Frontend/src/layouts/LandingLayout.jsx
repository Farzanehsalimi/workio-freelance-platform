import { Outlet } from "react-router-dom";
import LandingFooter from "./LandingFooter";
import LandingHeader from "./LandingHeader";

function LandingLayout() {
  return (
    <div className="h-screen w-full">
      <LandingHeader />
      <Outlet />
      <LandingFooter />
    </div>
  );
}

export default LandingLayout;
