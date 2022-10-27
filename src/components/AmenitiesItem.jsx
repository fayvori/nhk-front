
export const AmenitiesItem = (props) => {
    return (
        <div className="mb-4">
       <img 
         src={props.imageUrl}
         style={{ margin: "0 auto", maxWidth: props.maxWidth }}
       /> 

            <h1 className="text-center text-3xl font-semibold">{props.amenity}</h1>
            <p className="text-center">{props.amenityBody}</p>
        </div>
    )
}
