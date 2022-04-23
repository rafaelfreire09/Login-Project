import React from "react";
import { useNavigate  } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import * as S from './styles';

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth();
    let navigate = useNavigate();

    const redirect = () => {
        navigate('/');
    }

    if (!auth.accessToken) 
    {
        return (
            <S.Container>
                <S.Redirect>
                    <S.Text>
                        You don't have access.
                    </S.Text>
                    <S.Text>
                        You must <span>Sign In</span>.
                    </S.Text>
                    <S.SignIn_Button>
                        <button 
                            className="login-button"
                            onClick={redirect}
                        >
                            Go to Sign In Page
                        </button>
                    </S.SignIn_Button>
                </S.Redirect>
            </S.Container>
        );
    }

    return children;
};