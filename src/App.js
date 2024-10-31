import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Eletroo from "./pages/Eletroo";
import Calçadoss from "./pages/Calçadoss";
import Roupass from "./pages/Roupass";
import Acessórioss from "./pages/Acessórioss";
import Tecnologiass from "./pages/Tecnologiass";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Eletroo" element={<Eletroo />} />
        <Route path="/Calçadoss" element={<Calçadoss />} />
        <Route path="/Roupass" element={<Roupass />} />
        <Route path="/Acessórioss" element={<Acessórioss />} />
        <Route path="/Tecnologiass" element={<Tecnologiass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
