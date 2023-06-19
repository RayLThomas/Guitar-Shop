import Nav from "../../components/Nav/Nav.component";
import { Fragment } from "react";
import '../acoustics/acoustics.scss';
import ProductCategoryPage from '../../components/product-category-page/product-category-page.component'
import PageBanner from "../../components/page-banner/page-banner.component";
import ElectricBanner from '../../assets/electric-banner.jpg';

const Electrics = () => {
  return (
    <Fragment>
      <Nav />
      <PageBanner bannerText="Electric Guitars" bannerImg={ElectricBanner}/> 
      <ProductCategoryPage category='electricGuitars'/>
    </Fragment>
  );
};

export default Electrics;