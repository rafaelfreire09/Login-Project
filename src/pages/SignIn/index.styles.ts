import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const Container_Login = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const Wrap_Login = styled.div`
    width: 430px;
    border-radius: 25px;
    overflow: hidden;
    padding: 40px 30px 30px 30px;
    box-shadow: 0 0px 30px 0px rgba(94,94,94, 0.5);
    
`;

export const Login_Form = styled.div`
    width: 100%;
`;

export const Login_Form_Title = styled.div`
    font-family: Raleway, sans-serif;
    display: block;
    font-size: 130px;
    font-weight: 800;
    color: #02274F;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 30px;

    span {
        color: #FDCF00;
    }
`;

export const Wrap_Input = styled.div`
    width: 100%;
    position: relative;
    
    border-bottom: 3px solid #adadad;
    margin-bottom: 50px;

    .input {
        font-family: Raleway, sans-serif;
        font-size: 15px;
        font-weight: 600;
        color: #000;
        line-height: 1.2;
        border: none;
        display: block;
        width: 100%;
        height: 45px;
        background-color: transparent;
        padding: 0 5px;
    }

    .focus-input {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        color: #000;
        font-family: Raleway, sans-serif;
        font-weight: 700; 
    }

    .focus-input::before {
        content: "";
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;
        background: #6a7dfe;
        background: -webkit-linear-gradient(to right, #02274F, #FDCF0075);
        background: -o-linear-gradient(to right, #02274F, #FDCF0075);
        background: -moz-linear-gradient(to right, #02274F, #FDCF0075);
        background: linear-gradient(to right, #02274F, #fdcf00);
    }
      
    .focus-input::after {
        font-family: Raleway, sans-serif;
        font-size: 18px;
        color: #9F9F9F;
        line-height: 1.2;
        content: attr(data-placeholder);
        display: block;
        width: 100%;
        position: absolute;
        top: 16px;
        left: 0px;
        padding-left: 5px;
        -webkit-transition: all 0.2s;
        -o-transition: all 0.2s;
        -moz-transition: all 0.2s;
        transition: all 0.2s;
    }
      
    .input:focus {
        outline: 0;
    }
      
    .input:focus+.focus-input::after {
        top: -20px;
    }
      
    .input:focus+.focus-input::before {
        width: 100%;
    }
      
    .has-val+.focus-input::after {
        top: -20px;
    }
      
    .has-val+.focus-input::before {
        width: 100%;
    }
`;

export const Login_Form_Button = styled.div`
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

