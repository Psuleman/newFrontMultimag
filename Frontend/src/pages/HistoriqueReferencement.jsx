import { useState } from "react";
import { HistoriqueReferencementContext } from "../components/HistoriqueReferencement/Context/HistoriqueReferencementContext";
import Option from "../components/HistoriqueReferencement/Option";
import Template from "../components/Layout/Template"

const HistoriqueReferencement = () => {
    const [dateTache, setDateTache] = useState()
    const [listeTache, setListeTache] = useState()
    //render
    return (
        <Template>
            <HistoriqueReferencementContext.Provider value={{
                dateTache: dateTache, setDateTache: setDateTache,
                listeTache: listeTache, setListeTache: setListeTache,
            }}>
            	<header className="d-flex justify-content-between mb-3">
					<div className="fs-3 fw-bolder">Historique des référencement</div>
				</header>     
                <Option />         
            </HistoriqueReferencementContext.Provider>

        </Template>
    )
}

export default HistoriqueReferencement;