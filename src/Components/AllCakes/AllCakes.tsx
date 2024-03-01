"use client";
import Cake from "@/Types/Cake";
import { fetchAllCakes } from "@/api/fetches";
import { useState } from "react";

export const AllCakes = () => {
  const [cakes, setCakes] = useState<Cake[]>([]);

  return (
    <div>
      <h1>Lista de bolos:</h1>
      <button onClick={() => fetchAllCakes(setCakes)}>Ver bolos</button>
      {cakes.length > 0 && (
        <ul>
          {cakes.map((cake) => (
            <li key={cake._id}>
              <h2>{cake.cakeName}</h2>
              <p>Massa: {cake.batterFlavor}</p>
              <p>Recheio: {cake.fillingFlavor}</p>
              <p>Cobertura: {cake.icingFlavor}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
