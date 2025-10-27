import Loading from "../../ui/Loading";
import DashboardHeader from "../../ui/DashboardHeader";
import useProposals from "../Proposals/useProposals";
import useProjects from "../../hooks/useProjects";
import useUsers from "./useUsers";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading: isLoading1, proposals } = useProposals();
  const { isLoading: isLoading2, projects } = useProjects();
  const { isLoading: isLoading3, users } = useUsers();
  if (isLoading1 || isLoading2 || isLoading3) return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        users={users.length}
        projects={projects.length}
      />
    </div>
  );
}

export default DashboardLayout;
