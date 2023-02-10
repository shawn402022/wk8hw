import { useEffect, useState } from 'react'
import Car from './Car'
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

        </div>
    )
}


