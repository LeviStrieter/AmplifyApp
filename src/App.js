import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './componets/navbar.js'
import Home from './Pages/Home.js';
import Card_Page from './Pages/Card_Page.js';
import Contact from './Pages/Contact.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
      {<Navbar />}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/card" element={<Card_Page />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>

    </div>

    
  );
}

export default App;
