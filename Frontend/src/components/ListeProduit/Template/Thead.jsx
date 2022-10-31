import { useContext } from "react"
import { ListeContext } from "../Context/ListeContext"

const Thead = () => {
    const {thead} = useContext(ListeContext)
    return (
        <thead>
            <tr>
            {
                thead && thead.map((item, index)=>{
                    <th></th>
                })
            }                
            </tr>

        </thead>
    )
}

export default Thead