import '../styles/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./index";
import DashBoard from "./dashboard";
import AddPage from "./addPage";
import About from "./about";
import DogCard from "../components/DogCard";
import DogForm from "../components/DogForm"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <div>
        <Routes>
          <Route path = '/' element ={<HomePage/>}/>
        </Routes>
        <Routes>
          <Route path = '/dashboard' element ={<DashBoard/>}/>
        </Routes>
        <Routes>
          <Route path = '/about' element ={<About/>}/>
        </Routes>
        <Routes>
          <Route path = '/addPage' element ={<AddPage/>}/>
        </Routes>
        <Routes>
          <Route path = '/DogCard' element ={<DogCard/>}/>
        </Routes>
        <Routes>
          <Route path = '/DogForm' element ={<DogForm/>}/>
        </Routes>
      </div>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
