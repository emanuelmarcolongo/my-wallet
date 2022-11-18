import axios from "axios"
import { useEffect, useState } from "react";
import styled from "styled-components";
import exit from "./assets/exit.png"
import { ContentContainer } from "./Constants/syledComponents";
import plus from "./assets/plus-circle.png"
import minus from "./assets/minus-circle.png"

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

        <ContentContainer>

        <MainContainer>
        <Header>
            <p> Olá, fulano</p>
            <img alt="botao sair" src={exit} />
        </Header>
        <HistoryContent>
            {userHistory.map((i, idx) => <Transactions key={idx} value={i.value} type={i.type} time={i.time} description={i.description} />)}

            
        </HistoryContent>

        <Saldo>
                <p>SALDO</p>
                <FinalValue value={total}>{total}</FinalValue>
        </Saldo>


        <NewTransaction>

            <NewEntry>
                <img alt="mais" src={plus} />
                <p>Nova Entrada</p>
            </NewEntry>
            <NewEntry>
                <img alt="menos" src={minus} />
                <p>Nova saída</p>
            </NewEntry>
        </NewTransaction>

        </MainContainer>
        </ContentContainer>
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
    background-color: #9c28d6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 20px;
    }
`

const Header = styled.div`
    font-family: 'Raleway', sans-serif;
    display: flex;
    align-items: center;
    width: 336px;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 25px;
    color: white;
    font-size: 26px;
    font-weight: 700;
`
const Transaction = styled.div`
`

const HistoryContent = styled.div`
    width: 336px;
    background-color: white;
    overflow: scroll;
    border-radius: 5px;
    height: 60vh;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`

const Value = styled.p`
 color: ${props => (props.type === "Deposit") ? "#03AC00" : "#C70000"};
`

const Saldo = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 700;
    width: 336px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`

const FinalValue = styled.p`
    color: ${props => (props.value > 0) ? "#03AC00" : "#C70000"};
`

const NewTransaction = styled.div`
    display: flex;
    width: 336px;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`

const NewEntry = styled.div `
    width: 155px;
    height: 114px;
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