import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Homee from "./component/Homee";
import Eletrodo from "./page/Eletrodo";
import Shoes from "./page/Shoes";
import Dress from "./page/Dress";
import Acessories from "./page/Acessories";
import Tech from "./page/Tech";
import Perfil from "./page/Perfil";
import Carts from "./page/Carts";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {<Route path="/" element={<Homee />} />}
        <Route path="/Eletrodo" element={<Eletrodo />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Dress" element={<Dress />} />
        <Route path="/Acessories" element={<Acessories />} />
        <Route path="/Tech" element={<Tech />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Carts" element={<Carts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
