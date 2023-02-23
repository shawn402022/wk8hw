import { useContext, createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from '@firebase/auth'

export const AuthContext = createContext()

export const AuthProvider = function(props) {
    const [user, setUser] = useState({
        loginIn: false
    })
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    async function login() {
        const result = await signInWithPopup(auth, provider)
        console.log(result)
    }

    async function logout() {
        const result = await signOut(auth)
        console.log(result)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (userInfo)=>{
            if(userInfo) {
                setUser({
                    email: userInfo.email,
                    username: userInfo.displayName,
                    userid: userInfo.uid,
                    loggedIn: true
                })
            } else {
                setUser({
                    loggedIn: false
                })
            }
        })
    }, [])

    const value = {
        login,
        logout,
        user
    }
    return(
        <AuthContext.Provider value = {value}>
            {props.children}
        </AuthContext.Provider>
    )


}