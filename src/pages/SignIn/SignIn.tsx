import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const SignIn = () => {
    const auth = useAuth();
    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if (email && password) 
        {
            try 
            {
                await auth.authenticate(email, password);

                navigate('/profile');
            } catch (error) 
            {
                console.log('Invalid email or password');
            }
        }
    }

    return (
        <div>
            <input
                type="text"
                value={email}
                onChange={handleEmailInput}
                placeholder="Type your e-mail"
            />

            <input
                type="password"
                value={password}
                onChange={handlePasswordInput}
                placeholder="Type your password"
            />

            <button onClick={handleLogin}>Sign In</button>
        </div>
    );
}