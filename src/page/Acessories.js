import React from "react";
import "../component/Cards.css";

const Acessoriess = [
  {
    id: 1,
    name: "Brincos C/",
    price: 140,
    imagem: "../Assets/Acessories/Ac1.jpeg",
  },
  {
    id: 2,
    name: "Pulseiras",
    price: 650,
    imagem: "../Assets/Acessories/Ac2.jpeg",
  },
  {
    id: 3,
    name: "Brincos A",
    price: 550,
    imagem: "../Assets/Acessories/Ac3.jpeg",
  },
  {
    id: 4,
    name: "Moon ears",
    price: 650,
    imagem: "../Assets/Acessories/Ac4.jpeg",
  },
  {
    id: 5,
    name: "Oculos",
    price: 750,
    imagem: "../Assets/Acessories/Ac5.jpeg",
  },
  {
    id: 6,
    name: "Ipods bags",
    price: 650,
    imagem: "../Assets/Acessories/Ac6.jpeg",
  },
  {
    id: 7,
    name: "Sun glasses",
    price: 780,
    imagem: "../Assets/Acessories/Ac7.jpeg",
  },
  {
    id: 8,
    name: "Neckless",
    price: 650,
    imagem: "../Assets/Acessories/Ac8.jpeg",
  },
  {
    id: 8,
    name: "Pulseiras Gth",
    price: 130,
    imagem: "../Assets/Acessories/Ac9.jpeg",
  },
  {
    id: 8,
    name: "Neckless",
    price: 650,
    imagem: "../Assets/Acessories/Ac10.jpeg",
  },
];
function Acessories() {
  return (
    <div className="product-container">
      {Acessoriess.map((acess) => (
        <div key={acess.id} className="product-card">
          <img src={acess.imagem} alt={acess.name} />
          <h3>{acess.name}</h3>
          <p>{acess.price} MZN</p>
          <button>Adicionar Carrinho</button>
        </div>
      ))}
    </div>
  );
}

export default Acessories;
