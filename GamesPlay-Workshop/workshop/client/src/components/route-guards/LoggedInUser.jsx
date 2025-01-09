import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext";

export default function LoggedInUser() {

    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated
        ? <Outlet />
        : <Navigate to='/login' />
}