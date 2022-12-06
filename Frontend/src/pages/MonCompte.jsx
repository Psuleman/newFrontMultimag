import Template from "../components/Layout/Template"
import '../assets/scss/formulaire.scss'
import '../assets/scss/monCompte.scss'
import { useState } from "react"
import { UserContext } from "../components/MonCompte/Context/UserContext"
import Nom from "../components/MonCompte/Nom"
import Prenom from "../components/MonCompte/Prenom"
import Email from "../components/MonCompte/Email"
import Password from "../components/MonCompte/Password"
import ConfPassword from "../components/MonCompte/ConfPassword"
import { useEffect } from "react"
import { getUser, setUser } from "../services/user.service"
import Role from "../components/MonCompte/Role"
import { useNavigate } from "react-router-dom"

const MonCompte = () => {
	const [nom, setNom] = useState()
	const [prenom, setPrenom] = useState()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [confPassword, setConfPassword] = useState()
	const [role, setRole] = useState()
    const [nouveauPassword, setNouveauPassword] = useState()
	const [message, setMessage] = useState()
	const [erreur, setErreur] = useState()
	const [typeErreur, setTypeErreur] = useState()

	const [erreurNom, setErreurNom] = useState()
	const [erreurPrenom, setErreurPrenom] = useState()
	const [erreurPassword, setErreurPassword] = useState()
	const [erreurConfPassword, setErreurConfPassword] = useState()
	const [loading, setLoading] = useState(false)

	let navigate = useNavigate()
	useEffect(()=>{
		if(localStorage.getItem("user_multimag")){
			let userStorage = JSON.parse(localStorage.getItem("user_multimag")) 
			if(userStorage.email){
				let promise = Promise.resolve(getUser(userStorage.email))
				promise.then((value)=>{
					if(value){
						//console.log(value)
						setEmail(value[0].email)
						setNom(value[0].nom)
						setPrenom(value[0].prenom)
						setRole(value[0].service)
						
					}
				})
			}
		}
		
	}, [])

	const handleSubmit = (e) => {
		setLoading(true)
		e.preventDefault()

		/**
		 * Réinitialisation
		 */
		let msg= ""
		setErreur(false)
		setTypeErreur(null)
		setMessage("")

		setErreurNom(false)
		setErreurPrenom(false)
		setErreurPassword(false)
		setErreurConfPassword(false)
		
		/**
		 * Vérification des données
		 */

		//nom
		if(nom.length<2)
		{
			msg += "Nom incorrect, minimum 2 lettre. "
			setErreur(true)
			setTypeErreur("echec")
			setErreurNom(true)
		}

		if(prenom.length<2)
		{
			msg += "Prénom incorrect, minimum 2 lettre. "
			setErreur(true)
			setTypeErreur("echec")
			setErreurPrenom(true)
		}
		//password
		if((password && confPassword )&& (confPassword != password || password.length<8)){
			if(confPassword!=password){
				setErreurConfPassword(true)
			}
			if(password.length<8){
				setErreurPassword(true)
			}

			msg += "Mot de passe incorrect."
			setErreur(true)
			setTypeErreur("echec")


		}

		if(msg==""){
			let id=0

			let data = {
				email: email,
				nom: nom,
				prenom: prenom,
			}
			if(password){
				data = {
					email: email,
					nom: nom,
					prenom: prenom,
					password: password	
				} 
			}
			let promise = Promise.resolve(getUser(email,password))
			
			promise.then((value) => {
				if(value){
					id = value[0].id
					if(id>0){
						let promise2 = Promise.resolve(setUser(data,id))				

						promise2.then((valueSetUser)=>{
							if(valueSetUser && valueSetUser.statusText){
								setErreur(true)
								setTypeErreur("success")
								//msg = "Modification réussi"
								setMessage("Modification réussi")
							}
							else{
								setErreur(true)
								setTypeErreur("echec")
								//msg = "Echec de connexion"
								setMessage("Echec de connexion")

							}
						})

						setLoading(false)
					}
				}
				else{
					navigate(`/`);
				}
			})
				
			setErreurNom(false)
			setErreurPrenom(false)
			setErreurPassword(false)
			setErreurConfPassword(false)
		
			// setErreur(true)
			// setTypeErreur("success")
		}
		//
		if(msg != ""){
			setMessage(msg)
			setLoading(false)

		}

	}

	//console.log("nom", nom)
	return (
		<Template>
            <header className="d-flex justify-content-between">
                <div className="fs-3 fw-bolder">Mon compte</div>
            </header>			
			<section  className="row g-3 mt-1">
				{
					erreur && message!="" && typeErreur=="echec" &&
					<div class="alert alert-danger col-md-3" role="alert">
						{message}
					</div>
				}
				{
					erreur && message!="" && typeErreur=="success" &&
					<div class="alert alert-success  col-md-3" role="alert">
						{message}
					</div>
				}
				<form className="pt-3 px-3 pb-4 contentMonCompte" onSubmit={handleSubmit}>
					{/* <small>Tous les champs sont obligatoires.</small> */}
					<UserContext.Provider value={{
						nom: nom, setNom:setNom,
						prenom: prenom, setPrenom: setPrenom,
						email: email, setEmail: setEmail,
						password: password, setPassword: setPassword,
						confPassword: confPassword, setConfPassword: setConfPassword,
						role:role, setRole: setRole,

						erreurNom: erreurNom, 
						erreurPrenom: erreurPrenom,
						erreurPassword: erreurPassword,
						erreurConfPassword: erreurConfPassword,
					}}>
						<Nom />
						<Prenom />
						<Email />
						<Role />

						<div id="newPassword" className="mb-3 col-md-3">
							<label>Modifier votre mot de passe</label>
							<div>
								<div class="form-check">
									<input class="form-check-input" type="radio" id="flexRadioDefault1" name="newPassword" value={"true"} onChange={()=>{
																		setNouveauPassword(true)
																		setErreur(false)
																		}} />
									<label class="form-check-label" for="flexRadioDefault1">
										Oui
									</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" id="flexRadioDefault2" name="newPassword" value={"false"}  onChange={()=>{
									setNouveauPassword(false)
									setErreur(false)
									}} />
									<label class="form-check-label" for="flexRadioDefault2">
										Non
									</label>
								</div>

							</div>
						</div>
						{
							nouveauPassword && nouveauPassword==true && <Password />
						}
						{
							nouveauPassword && nouveauPassword==true && <ConfPassword />
						}
						{ 
							<div className="mb-3 col-md-3">
								<center><button  className="btn btn-outline-dark btn-lg px-5">Modifier</button></center>
							</div>
						}
                        {
                            loading &&
                            <div className="text-center mb-3 col-md-3">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            </div>                       
                        }
                        
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