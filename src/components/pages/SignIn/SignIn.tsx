import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from './index.styles';

import { useAuth } from "../../../context/AuthProvider/useAuth";

export const SignIn = () => {
    const auth = useAuth();
    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    function showMessage ( message: string) {
        function removeMessage () {
            setErrorMessage('');
        }

        setErrorMessage(message);

        setTimeout(removeMessage, 5000);
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
                showMessage('Invalid email or password.');
            }
        } else 
        {
            showMessage('Email and password is required.');
        }
    }

    return (
        <S.Container>
            <S.Container_Login>
                <S.Wrap_Login>
                    <S.Login_Form>
                        <S.Login_Form_Title>
                            b2b<span>it</span>
                        </S.Login_Form_Title>

                        <S.Wrap_Input>
                            <input
                                className={email !== "" ? "has-val input" : "input"}
                                type="email"
                                value={email}
                                onChange={handleEmailInput}
                            />

                            <span className="focus-input" data-placeholder="E-mail"></span>
                        </S.Wrap_Input>

                        <S.Wrap_Input>
                            <input
                                className={password !== "" ? "has-val input" : "input"}
                                type="password"
                                value={password}
                                onChange={handlePasswordInput}
                            />

                            <span className="focus-input" data-placeholder="Password"></span>
                        </S.Wrap_Input>

                        {errorMessage && (
                            <S.Error_Message>
                                {`${errorMessage}`}
                            </S.Error_Message>
                        )}

                        <S.Login_Form_Button>
                            <button 
                                className="login-button"
                                onClick={handleLogin}
                            >
                                Sign In
                            </button>
                        </S.Login_Form_Button>
                    </S.Login_Form>
                </S.Wrap_Login>
            </S.Container_Login>
        </S.Container>
    );
}