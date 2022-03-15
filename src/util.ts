import { Api } from "./services/api";
import { IUser } from "./types/types";

export function setUserLocalStorage (user: IUser | null) {
    localStorage.setItem('t', JSON.stringify(user));
}

export function getUserLocalStorage () {
    const json = localStorage.getItem("t");

    if (!json) 
    {
        return null;
    }

    const user = JSON.parse(json);

    return user ?? null;
}

export async function LoginRequest(email: string, password: string) {
    try 
    {
        const request = await Api.post("/tokens/", { 
            email, password 
        });

        return request.data;
    } catch (error) 
    {
        return null;
    }
}

export async function ProfileInfoRequest() {
    try 
    {
        const user = getUserLocalStorage();

        const config = 
        {
            headers: 
            { 
                'Authorization': `Bearer ${user.accessToken}`,
                'Content-Type': 'application/json'
            }
        };

        const request = await Api.get("/profile/", config);

        return request.data;
    } catch (error) 
    {
        return null;
    }
}