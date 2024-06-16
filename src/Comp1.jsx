import "./App.css";
import ima from "./assets/ima.jpg";

function Hola() {
  return (
    <div className="abcd">
      <div className="caja">
        <h1 className="abc">Saludando soy Andres Reynaldo Paye Burgoa</h1>
        <p className="abc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          fugit expedita aperiam obcaecati consequuntur. Quas, ipsa
          necessitatibus nobis eius corrupti a excepturi modi voluptatem vitae
          est rem veritatis vel omnis.
        </p>
      </div>
      <div className="caja">
        <img
          src={ima}
          alt="imagen"
          style={{ width: "400px", height: "auto" }}
        />
      </div>
    </div>
  );
}
export default Hola;
