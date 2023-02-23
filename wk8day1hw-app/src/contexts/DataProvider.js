import { useState, useEffect, createContext, useContext } from "react";
import {getFirestore, getDocs, collection, collectionGroup, doc, getDoc, Timestamp, addDoc, query, limit, setDoc } from '@firebase/firestore'
import { AuthContext } from "./AuthProvider";


export const DataContext = createContext()

export const DataProvider = function (props) {
    const db = getFirestore()
    const [inventory, setInventory] = useState([ ])
    const { user } = useContext(AuthContext)


    useEffect(()=> {
        async function fetchCar() {
            // const response = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars/')
            // const data = await response.json()
            // setInventory(data)
            // console.log(data)
            // const q = query(collectionGroup(db,'posts'), orderBy('date_created', 'desc'))
            const q = query(collectionGroup(db,'posts')) 

            const querySnapshot = await getDocs(q)
            const postDocs = []

            querySnapshot.forEach(async(doc) => {

                const userData = await getDoc(doc.ref.parent.parent)
                // const username = username = userData.data().userame

                postDocs.push({
                    id:doc.id,
                    // username: username,
                    ...doc.data()

                })
                setInventory(postDocs)
                // console.log(doc.id, doc.data())
            })
            // console.log(querySnapshot)
        }

        fetchCar()

    }, [])

    async function loadCar(id) {
        // const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
        // const data = await response.json()
        // return data
        const docRef = doc(db, 'Inventory', id)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()) {
            return{
                id:docSnap.id,
                ...docSnap.data()
            }
        } else{
            console.log(`Post with id ${id} does not exist.`)
        }      
    }

    async function addVehicle(name, year, owner) {
        const newVehicle = {
            name: name,
            year: year,
            owner: owner,
            date_created: Timestamp.now()
        }

        const userDoc = await setDoc(doc(db, 'users', user.userid), {
            username: user.username
        })

        const postDoc = await addDoc(collection(db,'users', user.userid, 'Inventory'), newVehicle )

        newVehicle.id = postDoc.id

        setInventory ([ newVehicle, ...inventory])
    }

    async function fetchCar(parameter) {
        const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${parameter}`)
        const data = await response.json()
        return data

    }



    const value ={
        inventory,
        fetchCar,
        loadCar,
        addVehicle

    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}