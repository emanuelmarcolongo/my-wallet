import styled from "styled-components";

export const ContentContainer = styled.div`
    font-family: 'Raleway', sans-serif;
    background-color: #9c28d6;
    width: 100%;
    height: 100vh;
`

export const LoginContainer = styled.div`
    font-family: 'Raleway', sans-serif;
    width: 375px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #9c28d6;
    img {
        width: 147px;
        height: 50px;
    }
    p {
        color: white;
        font-weight: 700;
        font-size: 15px;
        margin-top: 25px;
    }
    a {
        text-decoration: none;
    }
`
export const LoginForm = styled.form`
     font-family: 'Raleway', sans-serif;
     display: flex; 
     flex-direction: column;
     justify-content: center;
     width: 303px;
     background-color: #9c28d6;
     input {
         height: 45px;
         border: 1px solid #D4D4D4;
         border-radius: 5px;
         margin-bottom: 6px;
         ::placeholder {
            text-decoration: none;
            font-family: 'Raleway', sans-serif;
            color: #000;
            font-size: 20px;
         }
     }
     button {
        font-family: 'Raleway', sans-serif;
         height: 46px;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 4.5px;
         background-color: #A328D6;
         font-size: 20px;
         color: #fff;
     }
`
