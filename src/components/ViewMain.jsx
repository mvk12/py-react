import { Link } from "react-router-dom";

const ViewMain = () => {
  return (<>
    <p>Este es el principal</p>
    <Link to="/create">Crear nuevo</Link>
  </>);
};

export default ViewMain;
