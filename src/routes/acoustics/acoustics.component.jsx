import Nav from "../../components/Nav/Nav.component";
import { Fragment } from "react";
import ProductCategoryPage from '../../components/product-category-page/product-category-page.component'
import PageBanner from "../../components/page-banner/page-banner.component";
import AcousticBanner from '../../assets/acoustic-banner.jpg';

const Acoustics = () => {
  return (
    <Fragment>
      <Nav />
      <PageBanner bannerText="Acoustic Guitars" bannerImg={AcousticBanner}/> 
      <ProductCategoryPage category='acousticGuitars'/>
    </Fragment>
  );
};

export default Acoustics;
