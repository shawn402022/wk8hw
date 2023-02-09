import { useEffect, useState } from 'react'

export default function Inventory() {
    const [inventory, setInventory] = useState({})
    
    useEffect(()=> {
        async function fetchCar() {
            const response = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars/')
            const data = await response.json()
            setInventory(data)
            console.log(data)

        }

        fetchCar()

    }, [])

    return(
        <div className = 'Inventory'>
            <h2>{inventory.owner}</h2>
            <p>Car :{inventory.name}</p>
            <p>Year :{inventory.year}</p>


        </div>
    )
}