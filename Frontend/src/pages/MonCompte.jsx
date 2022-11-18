import Template from "../components/Layout/Template"
import '../assets/scss/formulaire.scss'
import { useState } from "react"
import { UserContext } from "../components/MonCompte/Context/UserContext"
import Nom from "../components/MonCompte/Nom"
import Prenom from "../components/MonCompte/Prenom"
import Email from "../components/MonCompte/Email"
import Password from "../components/MonCompte/Password"
import ConfPassword from "../components/MonCompte/ConfPassword"
import { useEffect } from "react"
import { getUser } from "../services/user.service"
import Role from "../components/MonCompte/Role"

const MonCompte = () => {
	const [nom, setNom] = useState()
	const [prenom, setPrenom] = useState()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [confPassword, setConfPassword] = useState()
	const [role, setRole] = useState()

	useEffect(()=>{
		if(localStorage.getItem("user_multimag")){
			let userStorage = JSON.parse(localStorage.getItem("user_multimag")) 
			if(userStorage.email){
				let promise = Promise.resolve(getUser(userStorage.email))
				promise.then((value)=>{
					if(value){
						console.log(value)
						setEmail(value[0].email)
						setNom(value[0].nom)
						setPrenom(value[0].prenom)
						setRole(value[0].service)
						
					}
				})
			}
		}
		
	}, [])

	console.log("nom", nom)
	return (
		<Template>
            <header className="d-flex justify-content-between">
                <div className="fs-3 fw-bolder">Mon compte</div>
            </header>			
			<section  className="row g-3 mt-1">
				<form className="pt-3 px-3 pb-4">
					{/* <small>Tous les champs sont obligatoires.</small> */}
					<UserContext.Provider value={{
						nom: nom, setNom:setNom,
						prenom: prenom, setPrenom: setPrenom,
						email: email, setEmail: setEmail,
						password: password, setPassword: setPassword,
						email: email, setEmail: setEmail,
						password: password, setPassword: setPassword,
						confPassword: confPassword, setConfPassword: setConfPassword,
						role:role, setRole: setRole,
					}}>
						<Nom />
						<Prenom />
						<Email />
						<Role />
						{/* <Password />
						<ConfPassword />
						<button className="btn btn-outline-dark">Valider</button> */}
						
					</UserContext.Provider>
				</form>
			</section>
		</Template>
		)
}

export default MonCompte;