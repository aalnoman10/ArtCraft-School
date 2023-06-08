import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [userLoding, setUserLoding] = useState(true);

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setUserLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setUserLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setUserLoding(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (user, name, photo) => {
        setUserLoding(true);
        return updateProfile(user, { displayName: name, photoURL: photo })
    }

    useEffect(() => {
        const unsubscrbe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser);
            setUserLoding(false);
        })
        return () => {
            return unsubscrbe()
        }
    }, [auth])

    const logOut = () => {
        return signOut(auth)
    }

    const info = {
        user,
        setUser,
        userLoding,
        createUser,
        login,
        googleLogin,
        updateUserProfile,
        logOut,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;