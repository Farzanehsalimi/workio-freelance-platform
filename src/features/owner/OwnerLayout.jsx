import AppLayout from "../../layouts/AppLayout";
import { ownerSidebarItems } from "../../data/sidebarItems.jsx";

function OwnerLayout() {
  return <AppLayout sidebarItems={ownerSidebarItems} />;
}

export default OwnerLayout;
