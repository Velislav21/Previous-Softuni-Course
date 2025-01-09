import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext";

export const GuestUser = (children) => {

    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    return (
        <Outlet value={children} />
    )
}