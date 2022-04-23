import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;
`;

export const Container_Header = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;
    position: absolute;
    height: 80px;
    display: flex;
    justify-content: right;
    align-items: center;
    padding-right: 40px;
`;

export const Logout_Button = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 13px;
    width: 280px;

    .logout-button {
        font-size: 17px;
        font-weight: 600;
        
        border: none;
        border-radius: 10px;
        color: #fff;
        line-height: 1.2;
        
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;

        background: #6a7dfe;
        background: -webkit-linear-gradient(to left, #02274F, #FDCF0075);
        background: -o-linear-gradient(to left, #02274F, #FDCF0075);
        background: -moz-linear-gradient(to left, #02274F, #FDCF0075);
        background: linear-gradient(to right, #02274F, #FDCF0075);
    }

    .logout-button:hover {
        cursor: pointer;
    }
`;

export const Container_Profile = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #F1F5F9;
`;

export const Wrap_Profile = styled.div`
    width: 370px;
    border-radius: 25px;
    overflow: hidden;
    padding: 40px 30px 15px 30px;
    box-shadow: 0 0px 10px 0px rgba(94,94,94, 0.1);

    background-color: #FDFDFD;
`;

export const SessionExpiredText = styled.div`
    font-family: Raleway, sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
    
    .expired {
        color: #ff2b2b;
    }

    span {
        color: #02274F;
    }
`;

export const SignIn_Button = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 13px;

    .login-button {
        font-size: 17px;
        font-weight: 600;
        
        border: none;
        border-radius: 10px;
        color: #fff;
        line-height: 1.2;
        
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;

        background: #6a7dfe;
        background: -webkit-linear-gradient(to left, #02274F, #FDCF0075);
        background: -o-linear-gradient(to left, #02274F, #FDCF0075);
        background: -moz-linear-gradient(to left, #02274F, #FDCF0075);
        background: linear-gradient(to right, #02274F, #FDCF0075);
    }

    .login-button:hover {
        cursor: pointer;
    }
`;

export const Profile_Picture = styled.div`
    font-family: Raleway, sans-serif;

    span {
        display: block; 
        text-align: center;
        font-size: 14px;
        margin-bottom: 12px;
    }

    span img {
        width: 60px;
        height: 60px;

        border-radius: 10px;
    }
`;

export const Profile_Info = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 20px;
    
`;

export const Profile_Text = styled.div`
    font-family: Raleway, sans-serif;
    font-size: 15px;
    margin-bottom: 10px;
    
    span {
        color: #003977;;
        font-weight: bold;
    }
`;

export const Profile_Field = styled.div`
    font-family: Raleway, sans-serif;
    font-size: 13px;
    line-height: 1.2;
    
    border: none;
    border-radius: 10px;

    display: block;
    width: 100%;
    height: 45px;
    padding: 14px 20px;
    
    background-color: #ECECEC;
`;