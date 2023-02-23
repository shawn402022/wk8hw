import { useState, useEffect, createContext, useContext } from "react";
import {getFirestore, getDocs, collection, doc, getDoc, Timestamp, addDoc } from '@firebase/firestore'


export const DataContext = createContext()

export const DataProvider = function (props) {
    const db = getFirestore()
    const [inventory, setInventory] = useState([ ])

    useEffect(()=> {
        async function fetchCar() {
            // const response = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars/')
            // const data = await response.json()
            // setInventory(data)
            // console.log(data)
            const querySnapshot = await getDocs(collection(db, "Inventory"))
            const postDocs = []

            querySnapshot.forEach((doc) => {
                postDocs.push({
                    id:doc.id,
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

    async function addVehicle(name, owner, sellingPrice, year) {
        const newVehicle = {
            name: name,
            owner: owner,
            sellingPrice: sellingPrice,
            year, year
            // username: 'ctemple'
            // date_created: Timestamp.now()
        }

        const doc = await addDoc(collection(db, 'Inventory'), newVehicle )
    }




    const value ={
        inventory,
        // fetchCar,
        loadCar,
        addVehicle

    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}