import Template from "../components/Layout/Template"
import ValueTableau from '../components/GestionUtilisateur/ValueTableau'
import Option from '../components/GestionUtilisateur/Option'
import { useState } from 'react'
import { SelectionItemContext } from '../components/GestionUtilisateur/Context/SelectionItemContext'


const GestionUtilisateur = () => {
	//variable
	const [tabSelection, setTabSelection] = useState([])
	let tab = [1,2,3,4]
	//fonction

	//render
	return(
			<Template>
				<h2>Gestion des utilisateurs</h2>
				<Option />
				<table>
					<thead>
						<tr>
							<th></th>
							<th>EMAIL</th>
							<th>INITIALISER LE MOT DE PASSE</th>
							<th>ROLE</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<SelectionItemContext.Provider value={{
							tabSelection: tabSelection,
							setTabSelection: setTabSelection
						}}>
						{
							tab.map((index, item)=>{
								let email = "exemple" + index + "@gmail.com"
								return <ValueTableau key={index} email={email} />
							}
								
							)
						}							
						</SelectionItemContext.Provider>

					</tbody>
				</table>	

				<button className="btn">Terminer</button>
		
			</Template>
		)
}

export default GestionUtilisateur