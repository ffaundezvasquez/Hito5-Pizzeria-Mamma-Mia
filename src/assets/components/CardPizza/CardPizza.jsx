import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { clp } from "../../utils/total";
import './cardpizza.css';

function CardPizza() {
  const [pizza, setPizza] = useState(null); // Asume que solo se devuelve una pizza
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await response.json();
      setPizza(data);
      setIngredients(data.ingredients); // Asume que la pizza tiene un array de ingredientes
    } catch (error) {
      console.error("Error fetching pizza data:", error);
    }
  };

  if (!pizza) return <div>Loading...</div>; // Muestra un mensaje mientras se cargan los datos

  return (
    <div>
      <br />
      <div className="card">
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <p>Ingredientes:</p>
          <div className="lista">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </div>
          <li className="list-group-item"></li>
          <li className="costo list-group-item">
            Precio: ${clp(pizza.price)}
          </li>
        </ul>
        <div className="card-body">
          <button type="button" className="btn btn-outline-secondary me-md-5">
            Ver más <FontAwesomeIcon icon={faCircleInfo} />
          </button>
          <button type="button" className="btn btn-outline-dark">
            Añadir <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;