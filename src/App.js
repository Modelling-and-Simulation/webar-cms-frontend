import Home from "./components/Home";
import Layout from "./components/Layout";
import Missing from "./screens/auth/Missing";
import Unauthorized from "./screens/auth/Unauthorized";
import PersistLogin from "./components/PersistLogin";
import { Routes, Route } from "react-router-dom";
import Login from "./screens/auth/Login";
import RequireAuth from "./components/RequireAuth";
import "./css/App.css"
import Register from "./screens/auth/Register";
import Dashboard from "./screens/customer/Dashboard";
import Content from "./screens/customer/Content";
import Target from "./screens/customer/Target";
import LinkContentTarget from "./screens/customer/LinkContentTarget";
import Profile from "./screens/customer/Profile";
import ConfirmedLinks from "./screens/customer/ConfirmedLinks";
import UploadContent from "./screens/customer/UploadContent";
import UploadTarget from "./screens/customer/UploadTarget";
import CreateURL from "./screens/customer/CreateURL";
import StaffHome from "./screens/staff/StaffHome";
import StaffEdit from "./screens/staff/StaffEdit";
import AdminDashboard from "./screens/admin/AdminDashboard";
import AdminSidebar from "./screens/admin/admin-components/AdminSidebar";
import AdminStaff from "./screens/admin/AdminStaff";
import AddStaff from "./screens/admin/AddStaff";
import AdminUsers from "./screens/admin/AdminUsers";

const ROLES = {
  Admin: "Admin",
  Staff: "Staff",
  RegisteredUser: "RegisteredUser",
  Public: "Public",
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="content" element={<Content />} />
        <Route path="target" element={<Target />} />
        <Route path="linkcontenttarget" element={<LinkContentTarget />} />
        <Route path="profile" element={<Profile />} />
        <Route path="confirmedlinks" element={<ConfirmedLinks />} />
        <Route path="uploadcontent" element={<UploadContent />} />
        <Route path="uploadtarget" element={<UploadTarget />} />
        <Route path="createurl" element={<CreateURL />} />
        <Route path="staffhome" element={<StaffHome />} />
        <Route path="staffedit" element={<StaffEdit />} />
        <Route path="admindashboard" element={<AdminDashboard />} />
        <Route path="adminsidebar" element={<AdminSidebar />} />
        <Route path="adminstaff" element={<AdminStaff />} />
        <Route path="addstaff" element={<AddStaff />} />
        <Route path="adminusers" element={<AdminUsers />} />


        {/* protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.RegisteredUser]} />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
