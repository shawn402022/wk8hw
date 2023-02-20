import { useEffect, useState, useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'
import Car from '../Components/Car'



export default function Inventory() {
    const {inventory} = useContext(DataContext)
  
    function showInventory() {
              return inventory.map(car => <Car key={car.id} car={car} showLink={true} /> ) 

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


