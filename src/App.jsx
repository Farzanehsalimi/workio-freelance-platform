import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
// import Project from "./pages/Project";
import { DarkModeProvider } from "./context/DarkModeContext";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";
import CompleteProfile from "./pages/CompleteProfile";
import LandingLayout from "./layouts/LandingLayout";
import Home from "./pages/home/Home";
const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <Toaster />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/owner" element={<OwnerLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            {/* <Route path="projects/:id" element={<Project />} /> */}
          </Route>

          <Route path="/freelancer" element={<FreelancerLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="projects" element={<SubmittedProjects />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="projects" element={<SubmittedProjects />} />
          </Route>

          <Route element={<LandingLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

// auth
// Task #1: auth user via OTP: one time password (کد های یکبار مصرف)
// 1. form -> getOTP -> input + button => PhoneNumber => send OTP
// 2. form -> check OTP -> request to backend (PhoneNumber + OTP) (بررسی اعتبار شماره و کد یکبار مصرف)

// request:
//* 1. axios (useState + useEffect)
//* 2. useFetch(custom hook) (data, loading, error)
//* 3. react-query(state management) =>
//  redux alternative (جایگزین ریداکس) (focus on remote states), fetch(get), mutate(post)
// state: local, async or remote(states that get from backend)
// نود و نه درصد استیت های ما تو پروژه های واقعی ریموت استیت یا استیت های ایسینک هستند
// استیت های ایسینک: اطلاعات سفارشات، اطلاعات تیکت ها:
//  که این ها از سمت بک اند میاد و نیازه ما این ها رو به صورت گلوبال داشته باشیم

// feature-based Driven Folder Structure:
// project => (components, hooks, context, ..)
// proposal
// authentication
// category
// users
// tnx
// ...
// cart
// ticket
// comment
// review

// admin, owner, freelancer

// owner/dashboard
// owner/projects
// owner/projects/:id
