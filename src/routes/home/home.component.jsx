import Nav from '../../components/Nav/Nav.component'
import FeaturedProducts from '../../components/featured-products/featured-products.component';
import BlurbDiscounts from '../../components/blurb-discounts/blurb-discounts.component'
import '../../App.scss';
import Hero from '../../components/hero/hero.component';

function Home() {
  return (
    <div className="App">
      <Nav />
      <main className="container">
        <Hero />
        <FeaturedProducts />
        <BlurbDiscounts />
      </main>
    </div>
  );
}

export default Home;
