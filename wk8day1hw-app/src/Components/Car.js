

export default function Car(props) {
    return(
        <div className="clist">
            <h2>{props.car.name}</h2>
            <p>{props.car.id}</p>
            <p>{props.car.year}</p>
            <p>{props.car.transmissiom}</p>
            <p>{props.car.selling_price}</p>
            <p>{props.car.owner}</p>
            
        </div>

    )
}