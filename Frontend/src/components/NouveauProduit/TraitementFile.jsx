import { useContext } from "react"
import { NouveauProduitContext } from "./Context/NouveauProduitContext"

const TraitementFile = () => {
    const {patienceImport, finImport, progressBar} = useContext(NouveauProduitContext)
    //render
    return (
        <div className="pt-3 px-3 pb-4">
            {
                finImport && "Terminer"
            }
            {
                patienceImport && 
                <div>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="mx-3">Traitement en cours...</span>
                {/* <div>{progessbar} %</div> */}
                {
                    progressBar>0 &&
                    <div className="progress mt-3 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
                        <div className="progress-bar bg-success" role="progressbar" aria-label="Default striped example" style={{width: parseInt(progressBar) + "%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                }
                </div>
            }
        </div>
    )
}

export default TraitementFile;