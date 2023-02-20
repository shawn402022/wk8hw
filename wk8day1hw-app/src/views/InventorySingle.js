import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Car from "../Components/Car"


export default function InventorySingle() {
    const[post, setPost] = useState({})
    const{ id } =  useParams()


    /*
    Take the id from use Params.
    Use the ID in a useEffect to fetch data
    from our singleapi endpoint
    'https://my-json-server.typicode.com/Llang8/cars-api/cars/1'
    where 1 is hte id
    Use that to put post data on the page
    */

    useEffect(() => {
        async function loadPost() {
            const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            const data = await response.json()
            setPost(data)
        }

        loadPost()

    }, [id])

    return (
        <div className="post">
            Post Single: {id}
            <Car car={post}/>
        </div>
    )
}
