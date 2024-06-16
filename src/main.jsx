import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import Hola from "./Comp1.jsx";
import Hola from "./Saludo.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hola
      danza="Ballet"
      pais="alemania"
      representante="alemania"
      dibujo="ballet.jpg"
      texto="alfkjief;fjsdkjfjfiagha;ifhsife;"
    />
    <Hola
      danza="chacarera"
      pais="Bolivia"
      representante="tarija"
      dibujo="chaca.jpg"
      texto="alfkjief;fjsdkjfjfiagha;ifhsife;"
    />
    {/* <App /> */}
  </React.StrictMode>
);
