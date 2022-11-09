import { useContext, useEffect, useState } from "react";
import { SelectionItemContext } from "./Context/SelectionItemContext";

const ValueTableau = ({email}) => {
	//variable
	const {tabSelection, setTabSelection} = useContext(SelectionItemContext)
	const [checked, setChecked] = useState(false)
	const [role, setRole] = useState("")
	//fonction
	useEffect(()=>{
		setChecked(false)
	}, [])
	const handleChangeCheckbox = (e) => {
		let tab=[ ...tabSelection ]
		if(!checked == true){
			tab.push(email)
			setTabSelection(tab)

		}
		else{
			let index = tab.indexOf(email)
			if(index != -1){
				tab.splice(index, 1)
			}

		}
		console.log(tab)
		setTabSelection(tab)
		setChecked(!checked)

	}
	
	//return
	return (
			<tr>
				<td><input type="checkbox" onChange={
					handleChangeCheckbox
				} /></td>
				<td>{email}</td>
				<td><input type="password" /></td>
				<td>
					<select value={role} onChange={(e)=>{ setRole(e.target.value) }}>
						<option value="">A définir</option>
						<option value="gestionnaireStock">Gestionnaire de stock</option>
						<option value="admin">Admin</option>
					</select>
				</td>
				<td>
					<button>Retirer l'utilisateur</button>
					<button>Modifier</button>
				</td>
			</tr>
		)
}

export default ValueTableau;