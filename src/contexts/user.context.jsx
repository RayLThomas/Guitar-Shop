import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});


export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};