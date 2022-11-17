import axios from "axios"
import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "./assets/MyWallet.png"
import { LoginContainer, LoginForm } from "./Constants/syledComponents"


export default function SignUpPage () {

    const body = 
    {  name: "", email: "", password: "", confirmpassword: ""}


    function handleSubmit(e) {
        e.preventDefault();
        if (body.password !== body.confirmpassword) {
            alert("As senhas devem ser iguais!");
            return;
        }

        axios.post("http://localhost:5000/sign-up", body)
        .then(res => {
            alert(res.data);
        })
        .catch(err => {
            alert(err.response.data);
        })

    }


    return (
        <LoginContainer>

        <img src={logo} />
        <LoginForm onSubmit={handleSubmit}>
            <input required  type="name" onChange={e => body.name= e.target.value} name="name" placeholder="nome"></input>
            <input required  type="email" onChange={e => body.email= e.target.value} name="email" placeholder="email"></input>
            <input required   type="password" onChange={e => body.password= e.target.value}  name="password" placeholder="senha"></input>
            <input required   type="password" name="confirmpassword" onChange={e => body.confirmpassword= e.target.value} placeholder="senha"></input>
            <button type="submit" > Cadastrar </button>
        </LoginForm>

        
        <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>
    </LoginContainer>
    )
}
