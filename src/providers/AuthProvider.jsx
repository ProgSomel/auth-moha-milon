import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import auth from "../firebase/firebase_config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const authContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //! logout 
    const logOut = () => {

        return signOut(auth);

    }
    
    //! Observe Auth Sate Change
    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('observing current user');
        })
        return () => {
            unSubscribe();
        }
    },[])


    const authInfo = {
        user, 
        createUser, 
        signInUser, 
        logOut
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.PropTypes ={
    children: PropTypes.node
}
/**
 * 1. Create Context and export it
 * 2. Set Provider with value
 * 3. Use the AuthProvider in main.jsx file
 * 4. Access children in the AuthProvider component and use as children in the middle of the AuthProvider
 */