import { useEffect, useState } from 'react'
import Car from '../Components/Car'



export default function Inventory() {
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
    function showInventory() {
              return inventory.map(car => <Car key={car.id} car={car} /> ) 

    }
    return(
        <div className = 'inventory'>
            <h2>Inventory</h2>
            {
               inventory.length === 0 ? 
               <p> Loading ...</p>  :
               showInventory()
            }

            
        </div>
        
    )
}


