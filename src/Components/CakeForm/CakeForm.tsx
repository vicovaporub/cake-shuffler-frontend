'use client'
import React, { useState } from 'react';
import '@/Components/CakeForm/CakeForm.css';

const CakeForm = () => {

  const [formData, setFormData] = useState({
    batterFlavor: '',
    fillingFlavor: '',
    icingFlavor: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    fetch( '<Link to backend handler>', { // Change this line so it works
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }


  return (
    <form className='form-container' onSubmit={handleSubmit}>
        <h1>Adicione um bolo na database:</h1>
      <label className='form-label'>
        Sabor da Massa:
        <input
          className='form-input'
          name='batterFlavor'
          type="text"
          onChange={handleChange}
          value={formData.batterFlavor}
        />
      </label>
      <label className='form-label'>
        Sabor do Recheio:
        <input
          className='form-input'
          name='fillingFlavor'
          type="text"
          onChange={handleChange}
          value={formData.fillingFlavor}
        />
      </label>
      <label className='form-label'>
        Sabor da Cobertura:
        <input
          className='form-input'
          name='icingFlavor'
          type="text"
          value={formData.icingFlavor}
          onChange={handleChange}
        />
      </label>
      <div className='button-container'>
      <button className='form-button' type="submit">Submit</button>
      </div>
    </form>
  )
}

export default CakeForm;
