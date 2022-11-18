import styled from "styled-components";

export const ContentContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap');

    div {
        font-family: 'Raleway', sans-serif;
    }
    p {
        font-family: 'Raleway', sans-serif;
    }
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
        font-family: 'Raleway', sans-serif;
        width: 147px;
        height: 50px;
    }
    p {
        font-family: 'Raleway', sans-serif;
        color: white;
        font-weight: 700;
        font-size: 15px;
        margin-top: 25px;
    }
    a {
        font-family: 'Raleway', sans-serif;
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
     margin: 0 auto;
     input {
        font-family: 'Raleway', sans-serif;
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

export const MainContainer = styled.div `
font-family: 'Raleway', sans-serif;
    background-color: #9c28d6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 20px;
    }
`

export const Header = styled.div`
    font-family: 'Raleway', sans-serif;
    display: flex;
    align-items: center;
    width: 336px;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 30px;
    margin-bottom: 25px;
    color: white;
    font-size: 26px;
    font-weight: 700;
`
export const Transaction = styled.div`
font-family: 'Raleway', sans-serif;
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
`

export const HistoryContent = styled.div`
font-family: 'Raleway', sans-serif;
    width: 336px;
    background-color: white;
    overflow: scroll;
    border-radius: 5px;
    height: 60vh;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`

export const Value = styled.p`
font-family: 'Raleway', sans-serif;
 color: ${props => (props.type === "Deposit") ? "#03AC00" : "#C70000"};
`

export const Saldo = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 700;
    width: 336px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`

export const FinalValue = styled.p`
font-family: 'Raleway', sans-serif;
    color: ${props => (props.value > 0) ? "#03AC00" : "#C70000"};
`

export const NewTransaction = styled.div`
font-family: 'Raleway', sans-serif;
    display: flex;
    width: 336px;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`

export const NewEntry = styled.div `
font-family: 'Raleway', sans-serif;
    width: 155px;
    height: 90px;
    display: flex;
    justify-content: space-around;
    margin-left: 10px;
    flex-direction: column;
    color: white;
    font-size: 20px;
    font-weight: 700;
    background-color: #9c28d6;
    img {
        width: 23px;
        height: 23px;
        color: white;
    }
`