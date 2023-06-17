import Nav from "../../components/Nav/Nav.component";
import { Fragment, useContext, useState, useEffect } from "react";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from '../../components/product-card/product-card.component';
import '../acoustics/acoustics.scss';
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
        <ProductCard key={index} product={doc}/>
      ))}
    </Fragment>
  );
};

export default Acoustics;