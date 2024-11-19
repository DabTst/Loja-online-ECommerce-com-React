import React from "react";
import "../component/Cards.css";

const Shoess = [
  { id: 1, name: "Sapatilhas", price: 760, imagem: "../Assets/Shoes/C1.jpeg" },
  {
    id: 2,
    name: "Chinelos Salto",
    price: 650,
    imagem: "../Assets/Shoes/C2.jpeg",
  },
  { id: 3, name: "Chinelos R", price: 1250, imagem: "../Assets/Shoes/C3.jpeg" },
  { id: 4, name: "Sandália", price: 650, imagem: "../Assets/Shoes/C4.jpeg" },
  { id: 5, name: "Sapato", price: 2350, imagem: "../Assets/Shoes/C5.jpeg" },
  { id: 6, name: "Girl Shoe", price: 750, imagem: "../Assets/Shoes/C6.jpeg" },
  { id: 7, name: "Saltos", price: 60, imagem: "../Assets/Shoes/C7.jpeg" },
  { id: 8, name: "Sandalias", price: 950, imagem: "../Assets/Shoes/C8.jpeg" },
  { id: 1, name: "Sapatilhas", price: 4350, imagem: "../Assets/Shoes/C1.jpeg" },
  { id: 2, name: "Chinelos", price: 640, imagem: "../Assets/Shoes/C2.jpeg" },
  { id: 3, name: "Rasos", price: 650, imagem: "../Assets/Shoes/C3.jpeg" },
  { id: 4, name: "Sandalias", price: 6210, imagem: "../Assets/Shoes/C4.jpeg" },
];
function Shoes() {
  return (
    <div className="product-container">
      {Shoess.map((shoe) => (
        <div key={shoe.id} className="product-card">
          <img src={shoe.imagem} alt={shoe.name} />
          <h3>{shoe.name}</h3>
          <p>{shoe.price} MZN</p>
          <button>Adicionar Carrinho</button>
        </div>
      ))}
    </div>
  );
}

export default Shoes;
