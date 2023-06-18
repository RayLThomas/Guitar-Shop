import Nav from "../../components/Nav/Nav.component";
import { Fragment } from "react";
import '../acoustics/acoustics.scss';
import ProductCategoryPage from '../../components/product-category-page/product-category-page.component'

const Electrics = () => {



  return (
    <Fragment>
      <Nav />
      <h1 className="pb-3 text-center">Electric Guitars</h1>
      <ProductCategoryPage category='electricGuitars'/>
    </Fragment>
  );
};

export default Electrics;