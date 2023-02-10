import { useEffect, useState } from 'react'
import Car from '../Components/Car'



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
        <div className = 'inventory'>
            <h2>Inventory</h2>
            
            { inventory.map(car => <Car key={car.id} car={car} /> ) }
            
        </div>
        
    )
}


