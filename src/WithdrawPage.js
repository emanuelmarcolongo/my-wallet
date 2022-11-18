import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ContentContainer, Header, LoginForm } from "./Constants/syledComponents"


export default function WithdrawPage ({userInfo}) {
    console.log(userInfo)
    const body = 
    {  value: "", description: ""}

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();


        axios.post("http://localhost:5000/withdraw", body, { headers: { Authorization: `Bearer ${userInfo.token}` } } )
        .then(res => {
           console.log(res.data) ;
           console.log(userInfo)
           navigate("/home")
        })
        .catch(err => {
            console.log(err.response.data);
        })

    }

    return (
        <ContentContainer>
            <Header>Nova Saída</Header>
            <LoginForm onSubmit={handleSubmit}>
            <input required  type="number" step=".1" onChange={e => body.value= Number(e.target.value)} name="value" placeholder="Valor"></input>
            <input required   type="string" onChange={e => body.description= e.target.value}  name="description" placeholder="Descrição"></input>
            <button type="submit" > Salvar Saída </button>
        </LoginForm>
       
        </ContentContainer>
    )
}
