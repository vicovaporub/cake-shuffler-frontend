"use client";
import Cake from "@/Types/Cake";
import { fetchAllCakes } from "@/pages/api/fetches";
import { useState } from "react";
import "@/Components/AllCakes/AllCakes.css";

export const AllCakes = () => {
  const [cakes, setCakes] = useState<Cake[]>([]);

  return (
    <div className="all-cakes-container">
      <h1>Lista de bolos disponíveis:</h1>
      <button
        className="all-cakes-button"
        onClick={() => fetchAllCakes(setCakes)}
      >
        Ver bolos
      </button>
      {cakes.length > 0 && (
        <div className="all-cakes-list">
          <ul>
            {cakes.map((cake) => (
              <li className="cake-list" key={cake._id}>
                <h2 className="cake-list-name">{cake.cakeName}</h2>
                <p className="cake-list-batter">
                  <strong>Massa: </strong>
                  {cake.batterFlavor}
                </p>
                <p className="cake-list-filling">
                  <strong>Recheio: </strong>
                  {cake.fillingFlavor}
                </p>
                <p className="cake-list-icing">
                  <strong>Cobertura: </strong> {cake.icingFlavor}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
