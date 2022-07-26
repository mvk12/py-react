import { Link } from "react-router-dom";

const ViewMain = () => {
  return (<>
    <p>Pantalla de inicio</p>
    <Link to="/create">Crear nuevo</Link>
  </>);
};

export default ViewMain;
