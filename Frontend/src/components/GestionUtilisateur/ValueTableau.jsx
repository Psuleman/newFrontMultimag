import { useContext, useEffect, useState } from "react";
import { SelectionItemContext } from "./Context/SelectionItemContext";
import { ValueTableauContext } from "./Context/ValueTableauContext";
import Droits from "./Droits";
import Password from "./Password";

const ValueTableau = ({indexUser}) => {
	//variable
	const {userSelect, setUserSelect, users} = useContext(SelectionItemContext)
	const [checked, setChecked] = useState(false)
	const [role, setRole] = useState("")
	const [roles, setRoles] = useState([])
	const [droits, setDroits] = useState([])

	const [nom, setNom] = useState()
	const [prenom, setPrenom] = useState()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
 
	//fonction
	useEffect(()=>{
		let utilisateur = users[indexUser]
		if(utilisateur){
			setEmail(utilisateur.email)
			setNom(utilisateur.nom)
			setPrenom(utilisateur.prenom)
			let mdp = password ? password : ""
			setPassword(mdp)
			setRole(utilisateur.service)
			setChecked(utilisateur.isChecked)
		}
		if(!roles || roles.length==0){
			let tab = ["Logistique", "Comptabilité", "IT", "e-shop", "e-shop & coordinateur achat", "e-shop & référencement", "Designer"]

			setRoles(tab)
		}

		if(!droits || droits.length == 0){
			let tab = ["Gérer les utilisateurs", "Référencement", "Modification des prix", "Importer les produits"]
			setDroits(tab)
		}

	}, [users])


	const handleChangeCheckbox = (e) => {
		let tab=[ ...userSelect ]
		let check = !checked
		if(check == true){
			//Ajouter la valeur dans le table, l'utilisateur est coché
			tab.push(users[indexUser])
			setUserSelect(tab)

		}
		else{
			// let index = tab.indexOf(email)
			// if(index != -1){
				// tab.splice(index, 1)
			// }

			let index = 0
			for(let item in tab){
				if(tab[item].email == email){
					index = item
				}
			}

			tab.splice(index, 1)

		}
		console.log("tab", tab)
		setUserSelect(tab)
		setChecked(!checked)

	}
	
	const handleClickUpdate = () => {
		let user = {
			nom: nom,
			prenom: prenom,
			email: email,
			role: role
		}			
		
		if(password){
			user = {
				nom: nom,
				prenom: prenom,
				email: email,
				password: password,
				role: role
			}			
		}





		console.log(user)
	}

	//return
	return (
			<ValueTableauContext.Provider value={{
				password: password, setPassword: setPassword,
			}}>
			<tr>
				<td className="p-2  detailSku"> 
				{
					checked ? 
					<input type="checkbox" onChange={handleChangeCheckbox} checked />
					:
					<input type="checkbox" onChange={handleChangeCheckbox} />
				}
					
				</td>
				<td className="p-2 " >
					<input type="email" className="form-control" id="exampleFormControlEmail" placeholder="name@example.com" value={email} disabled/>
				</td>
				<td className="p-2 " >
					<input type="text" className="form-control" id="exampleFormControlNom" placeholder="nom" value={nom} onChange={(e)=>{setNom(e.target.value)}}/>
				</td>
				<td className="p-2 " >
					<input type="text" className="form-control" id="exampleFormControlPrenom" placeholder="prénom" value={prenom} onChange={(e)=>{setPrenom(e.target.value)}}/>
				</td>
				<td className="p-2 " >
					<Password />
				</td>


				<td  className="p-2 " >
					<select  className="form-select" value={role} onChange={(e)=>{ setRole(e.target.value) }}>
					<option selected>Choisissez...</option>
						{
							roles && roles.map((item, index)=>(
								<option key={"role_item" + index} value={item}>{item}</option>
							))
						}
					</select>
				</td>

				<td  className="p-2 " >
					{
						droits && <Droits droits={droits} />
					}
					
				</td>
				<td  className="p-2 " >
					<button type="button" className="btn btn-light me-2">Retirer l'utilisateur</button>
					<button type="button" className="btn btn-light me-2" onClick={handleClickUpdate}>Modifier</button>
				</td>
			</tr>				
			</ValueTableauContext.Provider>

		)
}

export default ValueTableau;