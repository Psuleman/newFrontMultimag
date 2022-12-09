import Template from "../components/Layout/Template"
import ValueTableau from '../components/GestionUtilisateur/ValueTableau'
import Option from '../components/GestionUtilisateur/Option'
import { useEffect, useState } from 'react'
import { SelectionItemContext } from '../components/GestionUtilisateur/Context/SelectionItemContext'
import { getAllUser } from "../services/user.service"


const GestionUtilisateur = () => {
	//variable
	const [users, setUsers] = useState([])
	const [userSelect, setUserSelect] = useState([])
	//fonction

	useEffect(()=>{
		if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else if(users && users.length==0){
				const promise = Promise.resolve(getAllUser())
				promise.then((value)=>{
					let tab = value
					for(let item in tab){
						tab[item].isChecked = false
					}
					setUsers(tab)
				})
			}
		}
	}, [])


	//render
	return(
			<Template>
			<SelectionItemContext.Provider value={{
				userSelect: userSelect, setUserSelect: setUserSelect,
				users: users, setUsers: setUsers,
			}}>
				<header className="d-flex justify-content-between">
					<div className="fs-3 fw-bolder">Gestion des utilisateurs</div>
				</header>
				<Option />
				<div className="table">
				<table>
					<thead>
						<tr>
							<th className="p-2  detailSku"></th>
							<th className="p-2  sku">EMAIL</th>
							<th className="p-2 ">NOM</th>
							<th className="p-2 ">PRENOM</th>
							<th  className="p-2 " >INITIALISER LE MOT DE PASSE</th>
							<th  className="p-2 " >ROLE</th>
							<th  className="p-2 " >DROIT</th>
							<th className="p-2  action" colSpan="2">ACTION</th>
						</tr>
					</thead>
					<tbody>

						{
							users && 
							users.map((item, index)=>{
								return <ValueTableau key={index} indexUser={index} />
							}
								
							)
						}							

					</tbody>
				</table>	
				</div>


			</SelectionItemContext.Provider>


		
			</Template>
		)
}

export default GestionUtilisateur