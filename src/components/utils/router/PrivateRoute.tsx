import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook";

export const PrivateRoute = () => {
    const auth = useAuth()
  return (
    auth ? <Outlet /> : <Navigate to='login' />
  )
}
