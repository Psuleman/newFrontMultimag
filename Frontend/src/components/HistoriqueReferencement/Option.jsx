import { useEffect } from "react";
import { useContext } from "react";
import { HistoriqueReferencementContext } from "./Context/HistoriqueReferencementContext";
import Moment from "moment"
import { getTacheJournalier } from "../../services/taches.service";

const Option = () => {
    const {dateTache, setDateTache, listTache, setListeTache} = useContext(HistoriqueReferencementContext)

    //render
    return (
    <header>
        <div className="d-flex align-items-center p-3 action">
            <div className="form-check me-3">
                <label className="form-label">Séléctionner une date</label>
                <input type="date" max={Moment().format("YYYY-MM-DD")} className="form-control" value={dateTache} onChange={(e)=>{setDateTache(e.target.value)}} />
            </div>
        </div> 
    </header> 
    )
}

export default Option;