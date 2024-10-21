import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, 
signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios"

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            const logInEmailUser = {email: userEmail}
            setUser(currentUser);
            setLoading(false);
            if(currentUser){
                
                
                axios.post('https://real-state-project-server.onrender.com/jwt', logInEmailUser, {withCredential: true})
                .then(res=> {
                    console.log(res.data)
                })
                
                
            }else{
                axios.post('https://real-state-project-server.onrender.com/logout',
             logInEmailUser, {withCredentials: true})
             .then(res=>{
                console.log(res.data)
             })
            }
           
        });


        return () => unsubscribe();  // Corrected the cleanup function
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
