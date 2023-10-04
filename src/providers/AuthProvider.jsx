import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import auth from "../firebase/firebase_config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const authContext = createContext(null);

const googleProvider =  new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //! Sign In With Google 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //! logout 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);

    }
    
    //! Observe Auth Sate Change
    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('observing current user');
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    },[])


    const authInfo = {
        user, 
        createUser, 
        signInUser, 
        signInWithGoogle,
        logOut,
        loading, 
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