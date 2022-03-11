import React from "react";
import { useNavigate  } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element}) => {
    const auth = useAuth();

    //let navigate = useNavigate();

    if (!auth.email) 
    {
        //navigate('/signin');
        return <h1>You don't have access</h1>
        /* return (
            <div>
                {navigate('/signin')}
            </div>
        ); */
    }

    return children;
};