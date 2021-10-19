import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged,GithubAuthProvider , createUserWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../firebase/firebase.init";
 
 initializeAuthentication();
 const gitHubProvider = new GithubAuthProvider();

const useFirebase = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
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

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const createUserEmailPassword = (e) => {
        console.log(email, password)
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        e.preventDefault();

    }

    const signInUsingGitHub = () => {
        signInWithPopup(auth,gitHubProvider)
        .then(result => {
            setUser(result.user)
        })
    }
    return{
        user,
        isLoading,
        email,
        password,
        signInUsingGoogole,
        createUserEmailPassword ,
        signInUsingGitHub,
        handleEmail,
        handlePassword,
        logOut,
    }
}
export default useFirebase;