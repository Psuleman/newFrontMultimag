import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Connexion from './pages/Connexion'
import Exportation from './pages/Exportation'
import FormulaireProduit from './pages/FormulaireProduit'
import ListeProduit from './pages/ListeProduit'
import Modification from './pages/Modification'
import NouveauProduit from './pages/NouveauProduit'
import Referencement from './pages/Referencement'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="/liste-produit" element={<ListeProduit />} />
          <Route path="/referencement" element={<Referencement />} />
          <Route path="/modification" element={<Modification />} />
          <Route path="/exportation" element={<Exportation />} />
          <Route path="/nouveau-produit" element={<NouveauProduit />} />
          <Route path="/produit/sku" element={<FormulaireProduit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
