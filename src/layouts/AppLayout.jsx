import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import Drawer from "../ui/Drawer";
import DashboardSidebar from "../ui/DashboardSidebar";

// dashboard layout
function AppLayout({ sidebarItems }) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <div className="bg-secondary-0 h-screen lg:grid lg:grid-cols-[15rem_1fr] grid-rows-[auto_1fr] xl:max-w-screen-2xl mx-auto">
      <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
        <DashboardSidebar
          items={sidebarItems}
          onClose={() => setIsOpenDrawer(false)}
        />
      </Drawer>

      <aside className="hidden lg:block row-start-1 lg:row-span-2 lg:col-start-1">
        <DashboardSidebar items={sidebarItems} />
      </aside>

      <header className="row-start-1 lg:col-start-2">
        <Header onToggleSidebar={() => setIsOpenDrawer((p) => !p)} />
      </header>

      <main className="row-start-2 lg:col-start-2 overflow-y-auto rounded-3xl mx-2">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12 rounded-3xl p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
