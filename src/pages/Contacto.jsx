import React from "react";
import Form from "../components/Form";
import List from "../components/List";
import Menu from "../components/Menu";

const Contacto = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const services = [
    "Nos encontramos en:",
    "La Paz - Bolivia en la Calle Linares Nº 947",
    "Nuesto Email:",
    "info@agenciaturismoAndres.com​",
    "Nuestro WhatsApp:",
    "+591 777777777 - +591 66666666",
  ];

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Destinos", path: "/destinos" },
    { name: "Contacto", path: "/contacto" },
    { name: "Servicios", path: "/Servicios" },
  ];

  return (
    <div className="container">
      <div>
        <Menu items={menuItems} />
        <h1>Contacto</h1>
        <Form onSubmit={handleFormSubmit} />
      </div>
      <div>
        <h2>Tambien puede contactarnos</h2>
        <List items={services} />
      </div>
    </div>
  );
};

export default Contacto;
