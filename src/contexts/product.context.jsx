import { createContext, useState, useEffect } from "react";
import { db } from "../utils/firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [acousticGuitars, setAcousticGuitars] = useState([]);
  const [electricGuitars, setElectricGuitars] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const guitars = collection(db, "Guitars");
      const querySnapshot = await getDocs(guitars);
      const documents = querySnapshot.docs.map((doc) => doc.data());
      setData(documents);

      const acoustics = documents.filter((guitar) => guitar.type === "acoustic");
      setAcousticGuitars(acoustics);

      const electrics = documents.filter((guitar) => guitar.type === "electric");
      setElectricGuitars(electrics);

      const featured = documents.filter((guitar) => guitar.featured === true);
      setFeatured(featured);
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ data, acousticGuitars, electricGuitars, featured }}>
      {children}
    </ProductContext.Provider>
  );
};