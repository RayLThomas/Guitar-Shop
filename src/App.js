import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Acoustics from './routes/acoustics/acoustics.component';
import Electrics from './routes/electrics/electrics.components';
import Locations from './routes/locations/locations.components';
import Checkout from './routes/checkout/checkout.component'
import Login from './routes/login/login.component';
import SignUp from './routes/sign-up/sign-up.component';
import { useState } from "react";

import './App.css';


function App() {

  const [data, setData] = useState(null);

  /*
  useEffect(() => {
    const fetchData = async () => {
        const guitars = collection(db, "Guitars");
        const q = query(guitars, where('price', '>', 1000)); // Create a query with where clause
        const querySnapshot = await getDocs(q); // Pass the query to getDocs
        const documents = querySnapshot.docs.map((doc) => doc.data());
        setData(documents);
    };
    fetchData();
  }, []);
  */

  console.log(data);

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/acoustics' element={<Acoustics />}/>
      <Route path='/electrics' element={<Electrics />}/>
      <Route path='/locations' element={<Locations />}/>
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/sign-up' element={<SignUp />}/>
    </Routes>
  );
}

export default App;
