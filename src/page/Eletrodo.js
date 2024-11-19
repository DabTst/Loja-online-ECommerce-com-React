import React from "react";
import "../component/Cards.css";

const Eletros = [
  { id: 1, name: "VR 3D", price: 650, imagem: "../Assets/Eletrodo/E1.png" },
  { id: 2, name: "MDG cabe", price: 650, imagem: "../Assets/Eletrodo/E2.png" },
  {
    id: 3,
    name: "Neck Freezer",
    price: 450,
    imagem: "../Assets/Eletrodo/E3.png",
  },
  {
    id: 4,
    name: "Black Laptop",
    price: 550,
    imagem: "../Assets/Eletrodo/E4.jpg",
  },
  {
    id: 5,
    name: "Package Laptop",
    price: 850,
    imagem: "../Assets/Eletrodo/E5.png",
  },
  {
    id: 6,
    name: "Laptop Rosa mini",
    price: 450,
    imagem: "../Assets/Eletrodo/E6.png",
  },
  {
    id: 7,
    name: "Charger /BlueT",
    price: 350,
    imagem: "../Assets/Eletrodo/E7.png",
  },
  { id: 1, name: "VR 3D", price: 250, imagem: "../Assets/Eletrodo/E1.png" },
  { id: 2, name: "Vr H", price: 150, imagem: "../Assets/Eletrodo/E2.png" },
  { id: 3, name: "VR", price: 340, imagem: "../Assets/Eletrodo/E3.png" },
];
function Eletrodo() {
  return (
    <div className="product-container">
      {Eletros.map((eletro) => (
        <div key={eletro.id} className="product-card">
          <img src={eletro.imagem} alt={eletro.name} />
          <h3>{eletro.name}</h3>
          <p>{eletro.price} MZN</p>
          <button>Adicionar Carrinho</button>
        </div>
      ))}
    </div>
  );
}

export default Eletrodo;
