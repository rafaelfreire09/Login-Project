import React, { useEffect, useState } from 'react';

import * as S from './index.styles';

import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';
import { ProfileInfoRequest } from '../../context/AuthProvider/util';

export const Profile = () => {
    const auth = useAuth();
    let navigate = useNavigate();

    const [ profileName, setProfileName ] = useState([]);
    const [ profileLastName, setProfileLastName ] = useState([]);
    const [ profileEmail, setProfileEmail ] = useState([]);
    const [ profileAvatar, setProfileAvatar ] = useState([]);

    useEffect(() => 
    {
        const getProfile = async () => 
        {
            const response = await ProfileInfoRequest();

            setProfileName(response.name);
            setProfileLastName(response.last_name);
            setProfileEmail(response.email);
            setProfileAvatar(response.avatar.image_low_url);
        }

        getProfile();
    }, [])

    const handleLogout = () => 
    {
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
                            <img src={`${profileAvatar}`} alt="Profile Picture"/>
                        </span>
                    </S.Profile_Picture>

                    <S.Profile_Info>
                        <S.Profile_Text>
                            Your <span>Name</span>
                        </S.Profile_Text>

                        <S.Profile_Field>
                            {profileName + " " + profileLastName}
                        </S.Profile_Field>
                    </S.Profile_Info>

                    <S.Profile_Info>
                        <S.Profile_Text>
                            Your <span>E-mail</span>
                        </S.Profile_Text>

                        <S.Profile_Field>
                            {profileEmail}
                        </S.Profile_Field>
                    </S.Profile_Info>

                </S.Wrap_Profile>
            </S.Container_Profile>
        </S.Container>
    );
}