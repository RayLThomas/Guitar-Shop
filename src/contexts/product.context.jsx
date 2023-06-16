import { createContext, useState, useEffect } from "react";
import { db } from "../utils/firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const guitars = collection(db, "Guitars");
      const querySnapshot = await getDocs(guitars);
      const documents = querySnapshot.docs.map((doc) => doc.data());
      setData(documents);
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};