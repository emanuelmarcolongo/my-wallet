import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import logo from "./assets/MyWallet.png"
import { LoginContainer, LoginForm } from "./Constants/syledComponents"


export default function SignInPage ({userInfo}) {

    const navigate = useNavigate();

    const body = 
    {  email: "", password: ""}


    function handleSubmit(e) {
        e.preventDefault();



        axios.post("http://localhost:5000/sign-in", body)
        .then(res => {
            userInfo.token = (res.data) ;
           navigate("/home")
        })
        .catch(err => {
            alert(err.response.data);
        })

    }


    return (
        <LoginContainer>

        <img src={logo} />
        <LoginForm onSubmit={handleSubmit}>
            <input required  type="email" onChange={e => body.email= e.target.value} name="email" placeholder="email"></input>
            <input required   type="password" onChange={e => body.password= e.target.value}  name="password" placeholder="senha"></input>
            <button type="submit" > Entrar </button>
        </LoginForm>

        
        <Link to="/sign-up"><p>Não possui uma conta? Faça seu cadastro!</p></Link>
    </LoginContainer>
    )
}

