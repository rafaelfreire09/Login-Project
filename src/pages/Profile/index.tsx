import React, { useEffect, useState } from 'react';

import * as S from './styles';

import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ProfileInfoRequest } from '../../util';

export const Profile = () => {
    const auth = useAuth();
    let navigate = useNavigate();

    const [ profileName, setProfileName ] = useState([]);
    const [ profileLastName, setProfileLastName ] = useState([]);
    const [ profileEmail, setProfileEmail ] = useState([]);
    const [ profileAvatar, setProfileAvatar ] = useState([]);

    const [ showProfile, setShowProfile ] = useState(false);
    const [ showText, setShowText ] = useState(false);

    useEffect(() => 
    {
        const getProfile = async () => 
        {
            const response = await ProfileInfoRequest();

            if (response) 
            {
                setProfileName(response.name);
                setProfileLastName(response.last_name);
                setProfileEmail(response.email);
                setProfileAvatar(response.avatar.image_low_url);

                setShowProfile(true);
            } else 
            {
                setShowText(true);
            }
        }

        getProfile();
    }, [])

    const handleLogout = () => 
    {
        auth.logout();

        navigate('/');
    }

    return (
        <S.Container>
            {showProfile && (
                <div>
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
                                    <img src={`${profileAvatar}`} alt="User Profile"/>
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
                </div>
            )}
            
            {showText && (
                <S.Container_Profile>
                    <S.Wrap_Profile>
                        <S.SessionExpiredText>
                            <span className="expired">Your session expired.</span>
                        </S.SessionExpiredText>
                        <S.SessionExpiredText>
                            You must <span>Sign In</span>.
                        </S.SessionExpiredText>
                        <S.SignIn_Button>
                            <button 
                                className="login-button"
                                onClick={handleLogout}
                            >
                                Go to Sign In Page
                            </button>
                        </S.SignIn_Button>
                    </S.Wrap_Profile>
                </S.Container_Profile>
            )}

        </S.Container>
    );
}