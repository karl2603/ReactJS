import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/home.jsx";
import Submit from "./pages/submit.jsx";
import View from "./pages/view.jsx";
import Faq from "./pages/faq.jsx";
import Contact from "./pages/contact.jsx";
import Error from "./pages/Error.jsx";

function App(){
    return(
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Submit" element={<Submit />}/>
        <Route path="/View" element={<View />}/>
        <Route path="/Faq" element={<Faq />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
    )
}

export default App;