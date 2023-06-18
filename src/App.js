import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Acoustics from './routes/acoustics/acoustics.component';
import Electrics from './routes/electrics/electrics.components';
import Locations from './routes/locations/locations.components';
import Checkout from './routes/checkout/checkout.component'
import Login from './routes/login/login.component';
import SignUp from './routes/sign-up/sign-up.component';
import AllProducts from './routes/all-products/all-products.component';

import './App.scss';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='shop/acoustics' element={<Acoustics />}/>
      <Route path='shop/electrics' element={<Electrics />}/>
      <Route path='/locations' element={<Locations />}/>
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/shop' element={<AllProducts />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/sign-up' element={<SignUp />}/>
    </Routes>
  );
}

export default App;
