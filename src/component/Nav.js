import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa"; // Ícones de Font Awesome
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">Leslie's Store</Link>
      </div>

      {/* Lista de páginas */}
      <ul className="navbar-links">
        <li>
          <Link to="/Eletrodo">Eletrodomesticos</Link>
        </li>
        <li>
          <Link to="/Dress">Roupas</Link>
        </li>
        <li>
          <Link to="/Shoes">Calçados</Link>
        </li>
        <li>
          <Link to="/Acessories">Acessórios </Link>
        </li>
        <li>
          <Link to="/Tech">Tecnologias </Link>
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
        <Link to="/Perfil">
          <FaUser color="#fff" />
        </Link>
      </div>

      {/* Ícone de carrinho de compras */}
      <div className="navbar-cart">
        <Link to="/cart">
          <FaShoppingCart color="#fff" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
