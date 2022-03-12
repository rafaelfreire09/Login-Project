import React from 'react';

import * as S from './index.styles';

import profilePicture from '../../assets/test1.jpg';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const auth = useAuth();
    let navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();

        navigate('/signin');
    }

    return (
        <S.Container>
            <S.Container_Header>
                <S.Logout_Button>
                    <button 
                        className="logout-button"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </S.Logout_Button>
            </S.Container_Header>
            
            <S.Container_Profile>
                <S.Wrap_Profile>
                    <S.Profile_Picture>
                        <span>Profile picture</span>
                        <span>
                            <img src={profilePicture} alt="User Picture"/>
                        </span>
                    </S.Profile_Picture>

                    <S.Profile_Info>
                        <S.Profile_Text>
                            Your <span>Name</span>
                        </S.Profile_Text>

                        <S.Profile_Field>
                            Cleiton Bom de Guerra
                        </S.Profile_Field>
                    </S.Profile_Info>

                    <S.Profile_Info>
                        <S.Profile_Text>
                            Your <span>E-mail</span>
                        </S.Profile_Text>

                        <S.Profile_Field>
                            cleiton@grecia.com
                        </S.Profile_Field>
                    </S.Profile_Info>

                </S.Wrap_Profile>
            </S.Container_Profile>
        </S.Container>
    );
}