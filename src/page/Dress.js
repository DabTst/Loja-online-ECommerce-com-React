import React from "react";
import "../component/Cards.css";

const Dresss = [
  { id: 1, name: "Vestido", price: 650, imagem: "../Assets/Dress/R1.jpeg" },
  { id: 2, name: "C/ Blusas", price: 450, imagem: "../Assets/Dress/R2.jpeg" },
  { id: 3, name: "Pantalona", price: 540, imagem: "../Assets/Dress/R3.jpeg" },
  { id: 4, name: "Cropet Rosa", price: 500, imagem: "../Assets/Dress/R4.jpeg" },
  {
    id: 5,
    name: "C/ Blusa e Calça",
    price: 300,
    imagem: "../Assets/Dress/R5.jpeg",
  },
  {
    id: 6,
    name: "Vestido Tune",
    price: 520,
    imagem: "../Assets/Dress/R6.jpeg",
  },
  {
    id: 7,
    name: "Conjunto Pump Brown",
    price: 590,
    imagem: "../Assets/Dress/R7.jpeg",
  },
  { id: 8, name: "Saia Longa", price: 950, imagem: "../Assets/Dress/R8.jpeg" },
  {
    id: 9,
    name: "Camisa Doubel",
    price: 550,
    imagem: "../Assets/Dress/R9.jpeg",
  },
  {
    id: 10,
    name: "Camisola Men",
    price: 550,
    imagem: "../Assets/Dress/R10.jpeg",
  },
  {
    id: 11,
    name: "Camisola LT3",
    price: 550,
    imagem: "../Assets/Dress/R11.jpeg",
  },
  {
    id: 12,
    name: "Camisa Bask L",
    price: 550,
    imagem: "../Assets/Dress/R12.jpeg",
  },
  {
    id: 13,
    name: "ocean Blue Sh",
    price: 550,
    imagem: "../Assets/Dress/R13.jpeg",
  },
  {
    id: 14,
    name: "Vestido Pub Pink",
    price: 550,
    imagem: "../Assets/Dress/R14.jpeg",
  },
  {
    id: 15,
    name: "Vestido Pub Blue",
    price: 550,
    imagem: "../Assets/Dress/R15.jpeg",
  },
];

function Roupa() {
  return (
    <div className="product-container">
      {Dresss.map((dress) => (
        <div key={dress.id} className="product-card">
          <img src={dress.imagem} alt={dress.name} />
          <h3>{dress.name}</h3>
          <p>{dress.price} MZN</p>
          <button>Adicionar Carrinho</button>
        </div>
      ))}
    </div>
  );
}

export default Roupa;
