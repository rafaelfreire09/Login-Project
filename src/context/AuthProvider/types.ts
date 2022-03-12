export interface IUser
{
    refreshToken?: string;
    accessToken?: string;
}

export interface IContext extends IUser
{
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider
{
    children: JSX.Element;
}