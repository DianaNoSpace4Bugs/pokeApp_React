import React from "react";

const Card = ({ pokemon }) => {
  return (
    <>
      <div className="cardContainer">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.url} alt={`Una imagen del pokemon ${pokemon.name}`} />
      </div>
    </>
  );
};

export default Card;