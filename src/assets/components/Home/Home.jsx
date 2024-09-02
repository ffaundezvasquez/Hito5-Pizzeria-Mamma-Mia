import { useState, useEffect } from "react";
import React from "react";
import Header from "../Header/Header";
import CardPizza from "../CardPizza/CardPizza";

function Home({}) {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setPizzas(data);
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-md-4" key={pizza.id}>
              <CardPizza pizza={pizza}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
