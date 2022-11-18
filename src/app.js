import { BrowserRouter, Route, Routes } from "react-router-dom";
import DepositPage from "./DepositPage";
import GlobalStyle from "./globalStyles";
import HomePage from "./homePage";
import SignInPage from "./signInPage";
import SignUpPage from "./signUpPage";
import WithdrawPage from "./WithdrawPage";




function App() {

  const userInfo = {name: "", token: ""};

  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
      <Route path="/" element={ < SignInPage  userInfo={userInfo}/>} />
      <Route path="/sign-up" element={ < SignUpPage />} />
      <Route path="/deposit" element={ < DepositPage  userInfo={userInfo}/>} />
      <Route path="/withdraw" element={ < WithdrawPage  userInfo={userInfo}/>} />
      <Route path="/home" element={ < HomePage userInfo={userInfo}/>} />
      </Routes>

    </BrowserRouter>
     
    </>
  
  );
}

export default App;