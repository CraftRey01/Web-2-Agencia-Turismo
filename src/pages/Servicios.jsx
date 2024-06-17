import React from "react";
import Menu from "../components/Menu";
import Accordion from "../components/Accordion";

const Servicios = () => {
  const services = [
    {
      title: "Servicio 1",
      content: "Contenido del Servicio 1.",
    },
    {
      title: "Servicio 2",
      content: "Contenido del Servicio 2.",
    },
    {
      title: "Servicio 3",
      content: "Contenido del Servicio 3.",
    },
    {
      title: "Servicio 4",
      content: "Contenido del Servicio 4.",
    },
    {
      title: "Servicio 5",
      content: "Contenido del Servicio 5.",
    },
  ];

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Destinos", path: "/destinos" },
    { name: "Contacto", path: "/contacto" },
    { name: "Servicios", path: "/Servicios" },
  ];

  return (
    <div className="container">
      <Menu items={menuItems} />
      <h1>Servicios</h1>
      <Accordion items={services} />
    </div>
  );
};

export default Servicios;
