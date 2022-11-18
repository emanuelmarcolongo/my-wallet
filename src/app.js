import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import HomePage from "./homePage";
import SignInPage from "./signInPage";
import SignUpPage from "./signUpPage";




function App() {

  const userInfo = {name: "", token: ""};

  return (
    <>
    <BrowserRouter>
    <GlobalStyle>
      <Routes>
      <Route path="/" element={ < SignInPage  userInfo={userInfo}/>} />
      <Route path="/sign-up" element={ < SignUpPage/>} />
      <Route path="/home" element={ < HomePage userInfo={userInfo}/>} />
      </Routes>
      </GlobalStyle>
    </BrowserRouter>
     
    </>
  
  );
}

export default App;