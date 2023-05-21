import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouts = ({ children }) => {

    const { loading, user } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
            </div>

        )
    }
    else if (user) {
        return children
    }

    return <Navigate state={location} replace to='/login'></Navigate>
};

export default PrivateRouts;