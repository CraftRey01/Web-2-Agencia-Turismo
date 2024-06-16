import "./App.css";
function Hola(props) {
  return (
    <div className="principal">
      <div className="texto">
        <h1>{props.danza}</h1>
        <p>
          origen {props.pais} representante {props.representante}
        </p>
      </div>
      <div className="grafico">
        <img className="grafico1" src={props.dibujo}></img>
      </div>
      <div className="texto">
        <p>{props.texto}</p>
      </div>
    </div>
  );
}

export default Hola;
