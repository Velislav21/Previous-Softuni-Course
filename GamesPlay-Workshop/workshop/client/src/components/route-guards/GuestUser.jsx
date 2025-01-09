import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext";

export default function GuestUser() {

    const { isAuthenticated } = useContext(AuthContext);

    return !isAuthenticated
        ? <Outlet />
        : <Navigate to='/' />
}