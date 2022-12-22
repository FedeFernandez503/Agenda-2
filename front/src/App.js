import './App.css';
import  Home  from "./pages/Home/Home"
import { Error } from "./pages/Error/Error"
import {Contact} from "./pages/Contact/Contact"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
//import { Footer } from "./components/Footer/Footer"
//import { Header } from "./components/Header/Header"
//import { useState } from "react"
//import PrivateRoutes from "./routes/PrivateRoute"

function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/contactos' element={<Contact />} />
      <Route exact path='/Error404' element={<Error/>} />
      <Route path="*" element={<Navigate to="/Error404" />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
