import Nav from "../../components/Nav/Nav.component";
import { Fragment, useContext } from "react";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from '../../components/product-card/product-card.component';
import '../acoustics/acoustics.scss';

const Acoustics = () => {
  const { acousticGuitars } = useContext(ProductContext);


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