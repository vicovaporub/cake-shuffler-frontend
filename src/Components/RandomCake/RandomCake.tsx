'use client'
import Cake from '@/Types/Cake';
import React, { useState } from 'react';
import '@/Components/RandomCake/RandomCake.css'

const RandomCake = () => {
  const [randomCake, setRandomCake] = useState<Cake | null>(null);

  const handleSurpriseMe = async () => {
    try {
      const response = await fetch('<Link to backend handler>') // Change this line so it works
      const data = await response.json();

      if (response.ok) {
        setRandomCake(data);
      } else {
        console.error('Error fetching random cake:', data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='random-cake-container'>
      <h2 className='random-cake-title'>Qual bolo eu faço hoje?</h2>
      <div className='button-container'>
      <button className='random-cake-button' onClick={handleSurpriseMe}>Descubra aqui!</button>
      </div>
      {randomCake && (
        <div className='random-cake-details'>
          <h3>Seu bolo aleatório é:</h3>
          <p>Massa:     <strong>{randomCake.batterFlavor}</strong></p>
          <p>Recheio:   <strong>{randomCake.fillingFlavor}</strong></p>
          <p>Cobertura: <strong>{randomCake.icingFlavor}</strong></p>
        </div>
      )}
    </div>
  );
};

export default RandomCake;
