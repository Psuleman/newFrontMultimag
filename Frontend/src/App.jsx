import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Connexion from './pages/Connexion'
import DetailProduit from './pages/DetailProduit'
import FormulaireProduit from './pages/FormulaireProduit'
import GestionUtilisateur from './pages/GestionUtilisateur'
import ListeProduit from './pages/ListeProduit'
import MonCompte from './pages/MonCompte'
import NouveauProduit from './pages/NouveauProduit'
import ResetPassword from './pages/ResetPassword'
import "../src/assets/scss/liste.scss"
import "../src/assets/scss/table.scss"
import MiseAjour from './pages/MiseAjour'

function App() {
  const [service, setService] = useState()

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/produits/:liste" element={<ListeProduit />} />
          <Route path="/nouveau-produit" element={<NouveauProduit />} />
          <Route path="/produit/:skuProduit" element={<FormulaireProduit />} />
          <Route path="/produit/detail/:skuProduit" element={<DetailProduit />} />
          <Route path="/mon-compte" element={<MonCompte />} />
          <Route path="/gestion/utilisateur" element={<GestionUtilisateur />} />


          <Route path="/maj" element={<MiseAjour />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
