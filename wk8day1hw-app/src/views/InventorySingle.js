import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Car from "../Components/Car"


export default function InventorySingle() {
    const[car, setCar] = useState({})
    const{ id } =  useParams()
    /*useparams gives a object of the key of the name of your parameter.   
    you get a object of an object with akey of id and a value of whats actually in the route
    

    /*
    Take the id from use Params.
    Use the ID in a useEffect to fetch data
    from our singleapi endpoint
    'https://my-json-server.typicode.com/Llang8/cars-api/cars/1'
    where 1 is hte id
    Use that to put post data on the page
    */

    useEffect(() => {
        async function loadCar() {
            const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            const data = await response.json()
           
            setCar(data)
            
        }

        loadCar()

    }, [id])

    return (
        <div className="post">
            Single Car: {id}
            { car.name }
            <Car car={car}/>
        </div>
    )
}
