import useLogout from "./useLogout";
import Loading from "../../ui/Loading";
import { FiLogOut } from "react-icons/fi";

function Logout() {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <FiLogOut className="w-5 h-5 lg:w-6 lg:h-6 rotate-180 text-secondary-700 hover:text-error" />
    </button>
  );
}

export default Logout;
