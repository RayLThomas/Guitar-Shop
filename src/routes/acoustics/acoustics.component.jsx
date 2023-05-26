import Nav from "../../components/Nav/Nav.component";
import { Fragment } from "react";


const Acoustics = ({data}) => {

  return (
    <Fragment>
      <Nav />
      <h1>Acoustics page</h1>
      {data && data.map((doc, index) => (
        <h2 key={index}>Guitar name: {doc.name}: ${doc.price}</h2>
      ))}
    </Fragment>
  );
};

export default Acoustics;