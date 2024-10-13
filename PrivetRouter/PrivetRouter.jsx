import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const PrivetRouter = ({children})=>{
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(user?.email){
        return children
    }
    if(loading){
       return <progress className="progress w-56"></progress>
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
    
}
export default PrivetRouter;