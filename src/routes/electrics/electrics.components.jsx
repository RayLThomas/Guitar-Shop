import Nav from "../../components/Nav/Nav.component";
import { Fragment, useContext } from "react";
import { ProductContext } from "../../contexts/product.context";

const Electrics = () => {
  const { electricGuitars } = useContext(ProductContext);

    return (
        <Fragment>
        <Nav />
        <h1>Electrics page</h1>
        {electricGuitars && electricGuitars.map((doc, index) => (
          <h2 key={index}>Guitar name: {doc.name}: ${doc.price}</h2>
        ))}
      </Fragment>
    )
}

export default Electrics;