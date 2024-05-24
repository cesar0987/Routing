import { useParams } from "react-router-dom";

const Number = () => {
    const params = useParams()
    return (
    <div>
         <h1 className="heading" style={{backgroundColor:`${params.bgColor}`,color:`${params.ffColor}`}}>
        {
            !isNaN(params.id)?
            ` The number is: ${params.id}`:
            `The word is:${params.id}`
        }
        </h1>

    </div>
    )

}

export default Number;