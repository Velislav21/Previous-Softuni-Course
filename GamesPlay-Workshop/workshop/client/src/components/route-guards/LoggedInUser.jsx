import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext";

export const LoggedInUser = (children) => {

    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }

    return (
        <Outlet value={children} />
    )
}