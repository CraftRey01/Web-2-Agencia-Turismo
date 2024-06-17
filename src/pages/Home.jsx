// src/pages/Home.js
import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Menu from "../components/Menu";

const Home = () => {
  const carouselImages = [
    { src: "/public/imag/img10.jpg", alt: "Image 10" },
    { src: "/public/imag/img12.jpg", alt: "Image 12" },
    { src: "/public/imag/img13.jpg", alt: "Image 13" },
    { src: "/public/imag/img14.jpg", alt: "Image 14" },
    { src: "/public/imag/img1.jpg", alt: "Image 1" },
    { src: "/public/imag/img2.jpg", alt: "Image 2" },
    { src: "/public/imag/img3.jpg", alt: "Image 3" },
    { src: "/public/imag/img4.jpg", alt: "Image 4" },
    { src: "/public/imag/img5.jpg", alt: "Image 5" },
    { src: "/public/imag/img6.jpg", alt: "Image 6" },
    { src: "/public/imag/img7.jpg", alt: "Image 7" },
    { src: "/public/imag/img8.jpg", alt: "Image 8" },
    { src: "/public/imag/img9.jpg", alt: "Image 9" },
  ];

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
      <Carousel images={carouselImages} />
      <div className="container">
        <h1>Conoce Bolivia</h1>
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
    </div>
  );
};

export default Home;
