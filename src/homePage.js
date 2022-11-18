import axios from "axios"
import { useEffect, useState } from "react";
import exit from "./assets/exit.png"
import { ContentContainer, FinalValue, Header, HistoryContent, MainContainer, NewEntry, NewTransaction, Saldo, Transaction, Value } from "./Constants/syledComponents";
import plus from "./assets/plus-circle.png"
import minus from "./assets/minus-circle.png"
import {useNavigate } from "react-router-dom"


export default function HomePage ({userInfo}) {

    const [userHistory, setUserHistory] = useState([]);
    const navigate = useNavigate();
   
    useEffect (() => {
        axios.get("http://localhost:5000/history", { headers: { Authorization: `Bearer ${userInfo.token}` } })
        .then( res => {
           setUserHistory(res.data)
    }
        )
        .catch ( err => console.log(err.message));
    }, [])
    

    const positivo = userHistory.filter((i) => (i.type === "Deposit"))
    const negativo = userHistory.filter((i) => (i.type === "Withdraw"))


    console.log("positivo");
    console.log("negativo")
    console.log(positivo);
    console.log(negativo)

    let soma = 0;
    let subtracao = 0;
    positivo.forEach((i) => soma += i.value)
    negativo.forEach((i) => subtracao += i.value )

    const total = (soma - subtracao).toFixed(1);

    function handleDepositClick() {
        navigate("/deposit")
    }

    function handleWithdrawClick() {
        navigate("/withdraw")
    }

    function handleExit () {
        navigate("/")
    }

    return (

        <ContentContainer>

        <MainContainer>
        <Header>
            <p> Olá, {userInfo.name}</p>
            <img alt="botao sair" src={exit} onClick={handleExit}/>
        </Header>
        <HistoryContent>
            {userHistory.map((i, idx) => <Transactions key={idx} value={i.value} type={i.type} time={i.time} description={i.description} />)}

            
        </HistoryContent>

        <Saldo>
                <p>SALDO</p>
                <FinalValue value={total}>{total}</FinalValue>
        </Saldo>


        <NewTransaction>

            <NewEntry onClick={handleDepositClick}>
                <img alt="mais" src={plus} />
                <p>Nova Entrada</p>
            </NewEntry>
            <NewEntry onClick={handleWithdrawClick}>
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
            <p><strong>{time}</strong> {description}</p>
            <Value type={type}>{value}</Value>
        </Transaction>
    )
}

