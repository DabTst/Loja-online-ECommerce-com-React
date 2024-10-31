import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa"; // Ícones de Font Awesome
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">Leslie's Store</Link>
      </div>

      {/* Lista de páginas */}
      <ul className="navbar-links">
        <li>
          <Link to="/Eletroo">Eletrodomesticos</Link>
        </li>
        <li>
          <Link to="/Roupass">Roupas</Link>
        </li>
        <li>
          <Link to="/Calçadoss">Calçados</Link>
        </li>
        <li>
          <Link to="/Acessórioss">Acessórios </Link>
        </li>
        <li>
          <Link to="/Tecnologiass">Tecnologias </Link>
        </li>
      </ul>

      {/* Barra de pesquisa com ícone */}
      <div className="navbar-search">
        <input type="text" placeholder="Buscar..." />
        <button>
          <FaSearch />
        </button>
      </div>

      {/* Ícone de perfil */}
      <div className="navbar-profile">
        <Link to="/profile">
          <FaUser />
        </Link>
      </div>

      {/* Ícone de carrinho de compras */}
      <div className="navbar-cart">
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
