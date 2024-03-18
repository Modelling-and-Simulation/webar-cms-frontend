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
