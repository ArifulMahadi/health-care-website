import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../firebase/firebase.init";
 
 initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading,setIsloading] = useState(true)
    const auth = getAuth();
    const signInUsingGoogole = () => {
        setIsloading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .finally(() => setIsloading(false));
    }

    useEffect( () => {
     const unsubscribe = onAuthStateChanged(auth , user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsloading(false);
        })
        return () => unsubscribe;
    },[])

    const logOut = () => {
        setIsloading(true);
        signOut(auth)
        .then( () => {})
        .finally(() => setIsloading(false));;
    }
    return{
        user,
        isLoading,
        signInUsingGoogole,
        logOut,
    }
}
export default useFirebase;