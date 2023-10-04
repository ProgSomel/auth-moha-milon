import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(authContext);

    if(loading) {
       return  <span className="loading loading-spinner loading-xs"></span>

    }

    if(user) {
        return children;
    }
   

    return <Navigate to='/login'></Navigate>;
};


export default PrivateRoute;