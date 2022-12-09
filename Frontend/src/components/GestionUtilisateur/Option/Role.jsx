import { useContext, useState, useEffect } from "react"
import { SelectionItemContext } from "../Context/SelectionItemContext"

const Role = () => {
    const {userSelect} = useContext(SelectionItemContext)
    const [roles, setRoles] = useState()

    useEffect(()=>{
		if(!roles){
			let tab = ["Logistique", "Comptabilité", "IT", "e-shop", "e-shop & coordinateur achat", "e-shop & référencement", "Designer"]

			setRoles(tab)
		}
	}, [])
    console.log("total checked : ", userSelect.length)
    //render
    return (
    <div class="input-group me-3" style={{width: "30%"}}>
        <label class="input-group-text" for="inputGroupRole">Rôle pour la selection</label>
        <select class="form-select" id="inputGroupRole">
            <option selected>Choisissez...</option>
            {
                roles && roles.map((item, index)=>(
                    <option key={"role_item" + index} value={item}>{item}</option>
                ))
            }
        </select>
    </div>	
    )
}
export default Role