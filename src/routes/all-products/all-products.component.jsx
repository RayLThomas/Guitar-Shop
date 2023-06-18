import Nav from "../../components/Nav/Nav.component";
import { Fragment } from "react";
import '../acoustics/acoustics.scss';
import ProductCategoryPage from '../../components/product-category-page/product-category-page.component'

const AllProducts = () => {



  return (
    <Fragment>
      <Nav />
      <h1 className="pb-3 text-center">Shop Guitars</h1>
      <ProductCategoryPage category='data'/>
    </Fragment>
  );
};

export default AllProducts;