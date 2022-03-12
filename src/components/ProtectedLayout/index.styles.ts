import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const Redirect = styled.div`
    width: 430px;
    border-radius: 25px;
    overflow: hidden;
    padding: 40px 30px 30px 30px;
    box-shadow: 0 0px 30px 0px rgba(94,94,94, 0.5);
`;

export const Text = styled.div`
    font-family: Raleway, sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;

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