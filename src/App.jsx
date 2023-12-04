import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageComponent from "./Components/homePage";
import NavbarComponent from "./Components/navbar";
import Counter from "./Components/counter";
import TodoComponent from "./Components/todoComponent";
import MuiComponent from "./Components/muiComponent";
import LoginPage from "./Components/loginPage";
import ErrorComponent from "./Components/error";

function AppComponent() {

  return (
    <>





    <BrowserRouter>
    <NavbarComponent/>
    {/* <MuiComponent/> */}
    {/* <LoginPage/> */}
    <Routes>
  
        <Route path="/" element={<LoginPage/>}/>

        <Route path="/counter" element={<Counter/>}/>
        <Route path="/todoapp" element={<TodoComponent/>}/>
        {/* <Route path="/todoapp" element={<HomePageComponent name={"Home Page"}/>}/> */}
        <Route path="/errropageapp" element={<ErrorComponent/>}/>

        {/* <Route path="/todo" element={<TodoComponent name={"Home Page"}/>}/> */}

        <Route path="/about" element={<HomePageComponent name={"About Page"}/>}/>
        <Route path="/contact" element={<HomePageComponent name={"Contact Page"}/>}/>
        {/* <Route path="/mui-learn" element={<MuiComponent/>}/> */}
    </Routes>

    </BrowserRouter>





    </>
  );
}

export default AppComponent;
