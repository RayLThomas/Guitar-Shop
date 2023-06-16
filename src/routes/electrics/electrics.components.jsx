import Nav from "../../components/Nav/Nav.component";
import { Fragment, useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/product.context";

const Electrics = () => {
    const data = useContext(ProductContext);
    const [electricGuitars, setElectricGuitars] = useState([]);

    useEffect(() => {
        if (data) {
            const electricGuitars = data.filter((guitar) => guitar.type === "electric");
            setElectricGuitars(electricGuitars);
        }
    }, [data]);

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