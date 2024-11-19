import React from "react";

import "../component/Cards.css";

const Techs = [
  { id: 1, name: "Cover Phone", price: 650, imagem: "../Assets/Tech/T1.jpeg" },
  { id: 2, name: "C Phone", price: 738, imagem: "../Assets/Tech/T2.jpeg" },
  { id: 3, name: "Cover", price: 458, imagem: "../Assets/Tech/T3.jpeg" },
  { id: 4, name: "Cover Phone", price: 738, imagem: "../Assets/Tech/T4.jpeg" },
  { id: 5, name: "CP", price: 980, imagem: "../Assets/Tech/T5.jpeg" },
  { id: 6, name: "Cover Phone", price: 50, imagem: "../Assets/Tech/T6.jpeg" },
  { id: 7, name: "CPhone", price: 650, imagem: "../Assets/Tech/T1.jpeg" },
  {
    id: 1,
    name: " Pink Cover Phone",
    price: 60,
    imagem: "../Assets/Tech/T4.jpeg",
  },
  { id: 2, name: "eLt Cover", price: 600, imagem: "../Assets/Tech/T2.jpeg" },
  { id: 3, name: "Cover ", price: 320, imagem: "../Assets/Tech/T3.jpeg" },
];
function Tech() {
  return (
    <div className="product-container">
      {Techs.map((tech) => (
        <div key={tech.id} className="product-card">
          <img src={tech.imagem} alt={tech.name} />
          <h3>{tech.name}</h3>
          <p>{tech.price} MZN</p>
          <button>Adicionar Carrinho</button>
        </div>
      ))}
    </div>
  );
}

export default Tech;
