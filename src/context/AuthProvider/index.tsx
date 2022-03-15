import { createContext, useEffect, useState } from "react";
import { IContext, IUser } from "../../types/types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "../../util";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<IUser | null>();

    useEffect(() => 
    {
        const user = getUserLocalStorage();

        if (user) {
            setUser(user);
        }
    }, []);

    async function authenticate (email:string, password: string) 
    {
        const response = await LoginRequest(email, password);

        const payload = { refreshToken: response.tokens.refresh, accessToken: response.tokens.access,};

        setUser(payload);
        setUserLocalStorage(payload);
    }

    function logout () 
    {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}