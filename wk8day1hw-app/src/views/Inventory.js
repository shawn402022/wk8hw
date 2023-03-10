import { useEffect, useState, useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'
import Car from '../Components/Car'



export default function Inventory() {
    const {inventory, addVehicle} = useContext(DataContext)

    function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)

        addVehicle(formData.get('name'), formData.get('year'), formData.get('owner'))
        
    }
  
    function showInventory() {
              return inventory.map(car => <Car key={car.id} car={car} showLink={true} /> ) 

    }
    return(
        <div className = 'inventory'>
            <h2>Inventory</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name="name" placeholder="name" />
                <input type='text' name="year" placeholder="year" />
                <input type='text' name="owner" placeholder="owner" />
                <button>Add Car</button>
            </form>
            {
               inventory.length === 0 ? 
               <p> Loading ...</p>  :
               showInventory()
            }

            
        </div>
        
    )
}


