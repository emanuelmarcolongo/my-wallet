import axios from "axios"
import { useEffect, useState } from "react";
import styled from "styled-components";
import exit from "./assets/exit.png"


export default function HomePage ({userInfo}) {
 
    // const [userHistory, setUserHistory] = useState([]);

    // useEffect (() => {
    //     axios.get("http://localhost:5000/history", { headers: { Authorization: `Bearer ${userInfo.token}` } })
    //     .then( res => {
    //         setUserHistory(res.data)
    //         console.log(res.data)
    // }
    //     )
    //     .catch ( err => console.log(err));
    // }, [])
    



    return (

        <MainContainer>
        {/* <Header>
            <p> Olá, fulano</p>
            <img alt="botao sair" src={exit} />
        </Header>
        <HistoryContent>
            {(userHistory.length = 0) ? "Não há registros de entrada ou saída" :
            userHistory.map((i) => 
            <Transaction>{i.value}</Transaction>
            )
            } 
        </HistoryContent> */}
        </MainContainer>
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
`

const Transaction = styled.div`

`