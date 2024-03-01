"use client";
import Cake from "@/Types/Cake";
import React, { useState } from "react";
import "@/Components/RandomCake/RandomCake.css";
import { fetchRandomCake } from "@/api/fetches";

const RandomCake = () => {
  const [randomCake, setRandomCake] = useState<Cake | null>(null);

  return (
    <div className="random-cake-container">
      <h2 className="random-cake-title">Qual bolo eu faço hoje?</h2>
      <div className="button-container">
        <button
          className="random-cake-button"
          onClick={() => fetchRandomCake(setRandomCake)}
        >
          Descubra aqui!
        </button>
      </div>
      {randomCake && (
        <div className="random-cake-details">
          <h3>Seu bolo aleatório é:</h3>
          <p>
            Nome: <strong>{randomCake.cakeName}</strong>
          </p>
          <p>
            Massa: <strong>{randomCake.batterFlavor}</strong>
          </p>
          <p>
            Recheio: <strong>{randomCake.fillingFlavor}</strong>
          </p>
          <p>
            Cobertura: <strong>{randomCake.icingFlavor}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default RandomCake;
