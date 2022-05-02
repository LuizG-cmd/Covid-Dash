import React, { useEffect, useState } from "react";
import api from "./api";
import "./styles.css";

export default function App() {
  const [covid, setUser] = useState();

  useEffect(() => {
    api
      .get()
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="main-container">
      <div className="cards">
        <div className="card card-1">
          <div class="heading">
            <h1 class="heading__title">Casos diários</h1>
            <h2 className="card__title"> {covid?.cases} </h2>
            <h1 class="heading__title">Novos casos</h1>
            <h2 className="card__title"> {covid?.todayCases} </h2>
            <h1 class="heading__title">Casos ativos</h1>
            <h2 className="card__title"> {covid?.active} </h2>
          </div>
        </div>
        <div className="card card-2">
          <div class="heading">
            <h1 class="heading__title">Mortes</h1>
            <h2 className="card__title"> {covid?.deaths} </h2>
            <h1 class="heading__title">Mortes diárias</h1>
            <h2 className="card__title"> {covid?.todayDeaths} </h2>
          </div>
        </div>
        <div className="card card-3">
          <div class="heading">
            <h1 class="heading__title">Curados</h1>
            <h2 className="card__title"> {covid?.recovered} </h2>
            <h1 class="heading__title">Curados por dia</h1>
            <h2 className="card__title"> {covid?.todayRecovered} </h2>
          </div>
        </div>
      </div>
    </div>
    /*<div className="App">
      <div className="firstCard">
        <p>Novos casos: {covid?.updated}</p>
        <p>Casos diários: {covid?.todayCases}</p>
        <p>Casos ativos: {covid?.active}</p>
      </div>
      <div className="secondCard">
        <li>Mortes: {covid?.deaths}</li>
        <li>Mortes diárias: {covid?.todayDeaths}</li>
      </div>
      <div className="thirdCard">
        <li>Curados: {covid?.recovered}</li>
        <li>Curados por dia: {covid?.todayRecovered}</li>
      </div>
    </div>*/
  );
}
