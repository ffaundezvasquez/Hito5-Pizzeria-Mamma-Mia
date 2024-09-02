import React, { useState, useEffect } from "react";
import CardPizza from "../CardPizza/CardPizza";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);  // Inicializa como null para manejar mejor el estado de carga
  const [loading, setLoading] = useState(true);  // Estado de carga
  const [error, setError] = useState(null);  // Estado de error

  const consultarApi = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setPizza(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);  // Desactiva el estado de carga una vez finalizado
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Mensaje de carga
  }

  if (error) {
    return <div>Error: {error}</div>;  // Mensaje de error
  }

  return (
    <div className="container">
      {pizza ? <CardPizza pizza={pizza} /> : <div>No se encontró la pizza</div>}  {/* Renderiza condicionalmente */}
    </div>
  );
};

export default Pizza;