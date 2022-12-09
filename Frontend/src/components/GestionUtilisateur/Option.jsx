import { useContext, useEffect, useState } from "react";
import { SelectionItemContext } from "./Context/SelectionItemContext";
import Role from "./Option/Role";

const Option = () => {
	const {users, setUsers, userSelect, setUserSelect} = useContext(SelectionItemContext)
	const [isChecked, setIsChecked] = useState()


	useEffect(()=>{
		setIsChecked(false)
	}, [])
	const handleChangeAllCoched = () => {

		let check = !isChecked
		let tab = [...users]
		for(let item in tab){
			tab[item].isChecked = check
		}
		if(check == true){
			setUserSelect(tab)
		}else{
			setUserSelect([])
		}
		setUsers(tab)
		setIsChecked(check)

	}


	return (
		<header>
		<div className="d-flex align-items-center p-3 action">			
			<div className="form-check me-3">
				<input className="form-check-input" type="checkbox" value={isChecked} id="flexCheckToutCocher" onChange={()=>{
					handleChangeAllCoched()
					}} />
				<label className="form-check-label" for="flexCheckToutCocher">
					Tout cocher 
				</label>
			</div>
			{
				userSelect && userSelect.length > 0 &&
				<Role  />			
			}

			{
				userSelect && userSelect.length > 0 &&
				<div>
					<button type="button" class="btn btn-dark">Retirer les utilisateurs sélectionner</button>
				</div>
			}

		</div>			
		</header>

		)
}

export default Option;