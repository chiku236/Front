import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function PrivateOutlet() {
  const auth = true

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
