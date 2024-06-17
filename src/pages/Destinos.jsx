import React from "react";
import Card from "../components/Card";
import Menu from "../components/Menu";

const Destinos = () => {
  const destinations = [
    {
      image: "/public/imag/img1.jpg",
      title: "La Paz",
      description:
        "Conocida por su altitud y belleza natural, La Paz ofrece sitios históricos como Tiahuanaco y vistas espectaculares desde el Valle de la Luna.",
    },
    {
      image: "/public/imag/img2.jpg",
      title: "Santa Cruz",
      description:
        "La capital de la hospitalidad, famosa por sus misiones jesuíticas y el Fuerte de Samaipata, un importante sitio arqueológico.",
    },
    {
      image: "/public/imag/img3.jpg",
      title: "Cochabamba",
      description:
        "Conocida como la ciudad de la eterna primavera, ofrece el Cristo de la Concordia, el cristo más alto del mundo, y rica gastronomía.",
    },
    {
      image: "/public/imag/img4.jpg",
      title: "Oruro",
      description:
        "Famosa por su Carnaval, una de las mayores expresiones de folclore y cultura en Bolivia, y el Museo Minero.",
    },
    {
      image: "/public/imag/img5.jpg",
      title: "Tarija",
      description:
        "Conocida por sus viñedos y el Valle de la Concepción, ofrece un clima agradable y una rica tradición en producción de vino.",
    },
    {
      image: "/public/imag/img6.jpg",
      title: "Chuquisaca",
      description:
        "Sucre, la capital constitucional, es conocida por su arquitectura colonial y el Parque Cretácico con huellas de dinosaurios.",
    },
    {
      image: "/public/imag/img7.jpg",
      title: "Potosí",
      description:
        "Hogar del famoso Salar de Uyuni, el desierto de sal más grande del mundo, y la histórica Casa de la Moneda.",
    },
    {
      image: "/public/imag/img8.jpg",
      title: "Beni",
      description:
        "Conocido por su biodiversidad, el Parque Nacional Madidi es un destino ideal para los amantes de la naturaleza y la aventura.",
    },
    {
      image: "/public/imag/img9.jpg",
      title: "Pando",
      description:
        "Ubicado en la Amazonía boliviana, ofrece exuberante flora y fauna, y la experiencia de explorar la selva tropical.",
    },
    {
      image: "/public/imag/img10.jpg",
      title: "Lago Titicaca",
      description:
        "El Lago Titicaca es el lago navegable más alto que existe en el mundo, ya que está ubicado a una altura que sobrepasa los 3820 msnm y es compartido por dos países vecinos Bolivia y Perú.",
    },
    {
      image: "/public/imag/img12.jpg",
      title: "Coroico",
      description:
        "Coroico es una simpática localidad turística y uno de los principales destinos de viaje de departamento de La Paz. Coroico es una muy buena opción para todos aquellos que buscan tranquilidad, naturaleza y un clima agradable.",
    },
    {
      image: "/public/imag/img13.jpg",
      title: "Isla de la Luna",
      description:
        "La isla de la luna también llamada “Isla Koati”, es una pequeña isla situada en medio de las aguas del Lago Titicaca, una isla que, aunque pequeña (con tan solo 2,8 kilómetros de largo), posee un gran atractivo turístico.",
    },
    {
      image: "/public/imag/img14.jpg",
      title: "Isla Del Sol",
      description:
        "La Isla del Sol, Bolivia, se encuentra al sur del gran lago Titicaca. Primero, es una parada perfecta al cruzar la frontera entre Bolivia y Perú. Y segundo, según la leyenda, es el lugar de nacimiento de los Inca. Sin embargo, es un lugar que fácilmente se puede visitar en un día; aunque los viajeros suelen quedarse más tiempo y extienden su estadía para tomar un descanso del ajetreo del viaje por Perú y Bolivia",
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
      <h1>Todos los Destinos</h1>
      <p>
        Disfrute de la Maravilla de nuestros departamentos su cultura, comida,
        tradiciónes y descubra el maravilloso pais que es Bolivia
      </p>
      <div className="row">
        {destinations.map((dest, index) => (
          <div key={index} className="col-md-4">
            <Card
              image={dest.image}
              title={dest.title}
              description={dest.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinos;
