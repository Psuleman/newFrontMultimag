import Template from "../components/Layout/Template"
import '../assets/scss/formulaire.scss'

const MonCompte = () => {
	return (
		<Template>
			<h2>Mon compte</h2>
			<section className="form">
				<form>
					<small>Tous les champs sont obligatoires.</small>
					<div>
						<label>Nom</label>
						<input type="text" required />
					</div>				
					<div>
						<label>Rôle</label>
						<input type="text" required />
					</div>
					<div>
						<label>Mot de passe actuelle</label>
						<input type="password" required />
					</div>				
					<div>
						<label>Nouveau mot de passe</label>
						<input type="password" required />
					</div>
					<button className="btn">Terminer</button>					
				</form>
			</section>
		</Template>
		)
}

export default MonCompte;