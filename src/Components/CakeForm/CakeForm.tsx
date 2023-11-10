'use client'
import React from 'react';
import '@/Components/CakeForm/CakeForm.css';

const CakeForm = () => {
  return (
    <form className='form-container'>
        <h1>Adicione um bolo na database:</h1>
      <label className='form-label'>
        Sabor da Massa:
        <input
          className='form-input'
          type="text"
        />
      </label>
      <label className='form-label'>
        Sabor do Recheio:
        <input
          className='form-input'
          type="text"
        />
      </label>
      <label className='form-label'>
        Sabor da Cobertura:
        <input
          className='form-input'
          type="text"
        />
      </label>
      <div className='button-container'>
      <button className='form-button' type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CakeForm;
