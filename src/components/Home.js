import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="homeLogo">
        <h1>
          Leslie <br /> <span>Store</span>{" "}
        </h1>
      </div>

      <div className="navbar">
        <ul className="HomeList">
          <li>
            <Link to="/eletro">Eletrodomesticos</Link>
          </li>
          <li>
            <a href="calçados">Calçados</a>
          </li>
          <li>
            <a href="3">Roupas</a>
          </li>
          <li>
            <Link to="/Acessorios">Acessorios</Link>
          </li>
          <li>
            <a href="5">Tecnologia</a>
          </li>
        </ul>
      </div>

      <div className="pesquiseBar">
        <input type="text" placeholder="Buscar..." />
        <button>
          {" "}
          <FaSearch />{" "}
        </button>
      </div>

      <div className="profile">
        <a href="/profile">
          {" "}
          <FaUser />{" "}
        </a>
      </div>

      <div className="cart">
        <a href="/cart">
          <FaShoppingCart />
        </a>
      </div>
    </div>
  );
};

export default Home;
