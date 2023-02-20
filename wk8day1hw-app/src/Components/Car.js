import { Link } from "react-router-dom"

export default function Car(props) {

    function buildTitle() {
        if (props.showLink) {
            return(
            <h2><Link to={`/inventory/${props.car.id}`}>{props.car.name}</Link></h2>
            )
        } else{

            return(
            <h2>{props.car.name}</h2>
            )

        }
    }

    return(
        <div className="clist">
            {buildTitle() }
            
            <p>{props.car.id}</p>
            <p>{props.car.year}</p>
            <p>{props.car.transmissiom}</p>
            <p>{props.car.selling_price}</p>
            <p>{props.car.owner}</p>
            
        </div>

    )
}