import Nav from '../../components/Nav/Nav.component'
import ProductCategoryCard from '../../components/ProductCategoryCard/product-category-card.component'
import ButtonCustom from '../../components/ButtonCustom/button-custom.component';
import BlurbDiscounts from '../../components/blurb-discounts/blurb-discounts.component'
import '../../App.css';

function Home() {
  return (
    <div className="App">
      <Nav />
      <main className="container">
        <div className="hero fadeIn d-flex flex-column py-5">
          <h1 className="order-2">Find your tone.</h1>
          <div className="heroContent order-3">
            <p className="fs-3">
            Dive into our extensive collection of top-tier guitars,<br />tailored for every music enthusiast.
            </p>
            <ButtonCustom className="btn-primary">NewArrivals</ButtonCustom>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <ProductCategoryCard />
            <ProductCategoryCard />
          </div>
          <div className="row">
            <ProductCategoryCard />
            <ProductCategoryCard />
          </div>
        </div>

        <BlurbDiscounts />

      </main>
    </div>
  );
}

export default Home;
