import axios from "axios"
import { useEffect, useState } from "react";
import styled from "styled-components";
import exit from "./assets/exit.png"


export default function HomePage ({userInfo}) {
 
    const [userHistory, setUserHistory] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:5000/history", { headers: { Authorization: `Bearer ${userInfo.token}` } })
        .then( res => {
           setUserHistory(res.data)
    }
        )
        .catch ( err => console.log(err));
    }, [])
    

    const positivo = userHistory.filter((i) => (i.type === "Deposit"))
    const negativo = userHistory.filter((i) => (i.type === "Withdraw"))

    let soma = 0;
    let subtracao = 0;
    positivo.forEach((i) => soma += i.value )
    negativo.forEach((i) => subtracao += i.value )

    const total = soma - subtracao;

    return (

        <MainContainer>
        <Header>
            <p> Olá, fulano</p>
            <img alt="botao sair" src={exit} />
        </Header>
        <HistoryContent>
            {userHistory.map((i, idx) => <Transactions key={idx} value={i.value} type={i.type} time={i.time} description={i.description} />)}

            <Saldo>
                <p>SALDO</p>
                <FinalValue value={total}>{total}</FinalValue>
            </Saldo>
        </HistoryContent>
        </MainContainer>
    )
   
}

function Transactions ({value, type, time, description}) {

    return (
        <Transaction > 
            <p>{time} <strong>{description}</strong></p>
            <Value type={type}>{value}</Value>
        </Transaction>
    )
}

const MainContainer = styled.div `
    background-color: #A328D6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 20px;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    width: 350px;
    justify-content: space-between;
    margin: 0 auto;
`

const HistoryContent = styled.div`
    width: 326px;
    background-color: white;
`

const Transaction = styled.div`
   p {
    
   }
`
const Value = styled.p`
 color: ${props => (props.type === "Deposit") ? "#03AC00" : "#C70000"};
`

const Saldo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
`

const FinalValue = styled.p`
    color: ${props => (props.value > 0) ? "#03AC00" : "#C70000"};
`