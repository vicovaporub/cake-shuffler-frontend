"use client";
import Cake from "@/Types/Cake";
import React, { useState } from "react";
import "@/Components/RandomCake/RandomCake.css";
import { fetchRandomCake } from "@/pages/api/fetches";

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
          <p className="random-cake-announcer">O bolo escolhido foi:</p>
          <p className="random-cake-name">
            Nome: <strong>{randomCake.cakeName}</strong>
          </p>
          <p className="random-cake-batter">
            Massa: <strong>{randomCake.batterFlavor}</strong>
          </p>
          <p className="random-cake-filling">
            Recheio: <strong>{randomCake.fillingFlavor}</strong>
          </p>
          <p className="random-cake-icing">
            Cobertura: <strong>{randomCake.icingFlavor}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default RandomCake;
