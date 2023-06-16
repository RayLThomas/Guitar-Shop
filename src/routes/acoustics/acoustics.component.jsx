import Nav from "../../components/Nav/Nav.component";
import { Fragment, useContext, useState, useEffect } from "react";
import { ProductContext } from "../../contexts/product.context";

const Acoustics = () => {
  const data = useContext(ProductContext);
  const [acousticGuitars, setAcousticGuitars] = useState([]);

  useEffect(() => {
    if (data) {
      const acousticGuitars = data.filter((guitar) => guitar.type === "acoustic");
      setAcousticGuitars(acousticGuitars);
    }
  }, [data]);

  return (
    <Fragment>
      <Nav />
      <h1>Acoustics page</h1>
      {acousticGuitars && acousticGuitars.map((doc, index) => (
        <h2 key={index}>Guitar name: {doc.name}: ${doc.price}</h2>
      ))}
    </Fragment>
  );
};

export default Acoustics;