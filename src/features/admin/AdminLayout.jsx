import AppLayout from "../../layouts/AppLayout";
import { adminSidebarItems } from "../../data/sidebarItems.jsx";

function AdminLayout() {
  return <AppLayout sidebarItems={adminSidebarItems} />;
}

export default AdminLayout;
