import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Connexion from './pages/Connexion'
import DetailProduit from './pages/DetailProduit'
import Exportation from './pages/Exportation'
import FormulaireProduit from './pages/FormulaireProduit'
import GestionUtilisateur from './pages/GestionUtilisateur'
import ListeProduit from './pages/ListeProduit'
import Modification from './pages/Modification'
import MonCompte from './pages/MonCompte'
import NouveauProduit from './pages/NouveauProduit'
import Referencement from './pages/Referencement'
import ResetPassword from './pages/ResetPassword'
import TestTableau from './pages/testTableau'


function App() {
  const [service, setService] = useState()

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/produits/:liste" element={<ListeProduit />} />
          <Route path="/referencement" element={<Referencement />} />
          <Route path="/modification" element={<Modification />} />
          <Route path="/exportation" element={<Exportation />} />
          <Route path="/nouveau-produit" element={<NouveauProduit />} />
          <Route path="/produit/:skuProduit" element={<FormulaireProduit />} />
          <Route path="/produit/detail/:skuProduit" element={<DetailProduit />} />
          <Route path="/mon-compte" element={<MonCompte />} />
          <Route path="/gestion/utilisateur" element={<GestionUtilisateur />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
