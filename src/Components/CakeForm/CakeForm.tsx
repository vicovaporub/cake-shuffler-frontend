"use client";
import React, { useState } from "react";
import "@/Components/CakeForm/CakeForm.css";
import { fetchSubmitCakeForm } from "@/pages/api/fetches";

const CakeForm = () => {
  const [formData, setFormData] = useState({
    cakeName: "",
    batterFlavor: "",
    fillingFlavor: "",
    icingFlavor: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchSubmitCakeForm(formData);
    setFormData({
      cakeName: "",
      batterFlavor: "",
      fillingFlavor: "",
      icingFlavor: "",
    });
  };

  return (
    <div className="form-container">
      <form className="cake-form" onSubmit={handleSubmit}>
        <h1>Adicione um bolo na base de dados:</h1>
        <label className="form-label">
          Nome do Bolo:
          <input
            required
            className="form-input"
            name="cakeName"
            type="text"
            onChange={handleChange}
            value={formData.cakeName}
          />
        </label>
        <label className="form-label">
          Sabor da Massa:
          <input
            required
            className="form-input"
            name="batterFlavor"
            type="text"
            onChange={handleChange}
            value={formData.batterFlavor}
          />
        </label>
        <label className="form-label">
          Sabor do Recheio:
          <input
            required
            className="form-input"
            name="fillingFlavor"
            type="text"
            onChange={handleChange}
            value={formData.fillingFlavor}
          />
        </label>
        <label className="form-label">
          Sabor da Cobertura:
          <input
            required
            className="form-input"
            name="icingFlavor"
            type="text"
            value={formData.icingFlavor}
            onChange={handleChange}
          />
        </label>
        <div className="button-container">
          <button className="form-button" type="submit">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CakeForm;
