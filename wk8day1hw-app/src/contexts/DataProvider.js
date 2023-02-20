import { useState, useEffect, createContext, useContext } from "react";

export const DataContext = createContext()

export const DataProvider = function (props) {
    const [inventory, setInventory] = useState([ ])

    useEffect(()=> {
        async function fetchCar() {
            const response = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars/')
            const data = await response.json()
            setInventory(data)
            console.log(data)

        }

        fetchCar()

    }, [])

    async function loadCar(id) {
        const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
        const data = await response.json()
       
        return data
        
    }


    const value ={
        inventory,
        loadCar
    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}