import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import logo from "./assets/MyWallet.png"
import { ContentContainer, LoginContainer, LoginForm } from "./Constants/syledComponents"


export default function SignInPage ({userInfo}) {

    const navigate = useNavigate();

    const body = 
    {  email: "", password: ""}


    function handleSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:5000/sign-in", body)
        .then(res => {
            userInfo.name = (res.data.name) ;
            userInfo.token = (res.data.token);
           navigate("/home")
        })
        .catch(err => {
            console.log(err.response.data);
        })

    }


    return (
        <ContentContainer>
        <LoginContainer>

        <img src={logo} />
        <LoginForm onSubmit={handleSubmit}>
            <input required  type="email" onChange={e => body.email= e.target.value} name="email" placeholder="E-mail"></input>
            <input required   type="password" onChange={e => body.password= e.target.value}  name="password" placeholder="Senha"></input>
            <button type="submit" > Entrar </button>
        </LoginForm>

        
        <Link to="/sign-up"><p>Primeira vez? Cadastre-se!</p></Link>
    </LoginContainer>
    </ContentContainer>
    )
}

