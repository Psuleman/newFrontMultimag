import { useContext } from "react";
import { ListeContext } from "../Context/ListeContext";

const Recherche = () => {
    const {searchSkus, setSearchSkus, validateSearchSkus, setValidateSearchSkus, setCurrentPage} = useContext(ListeContext)

    const handleClick = () => {
        if(searchSkus){
            let sku = ""+searchSkus
            sku = sku.trim()
            sku = sku.replace(/ /g, '')
            sku = parseInt(sku)
            setSearchSkus(sku)

            setValidateSearchSkus(true)
            //console.log("sku", sku)
        }
    }

    return (
    <div className="form-group">
        <label className="mb-1" htmlFor="rechercheSKUInput">Recherche par SKU</label>
        <div className="input-group mb-3">
            <input type="search" className="form-control" id="rechercheSKUInput" placeholder="Saisissez le SKU" value={searchSkus} onChange={(e)=>{
                setSearchSkus(e.target.value)
                setValidateSearchSkus(false)
                }} />

            {
                validateSearchSkus ? 
                <button type="button" className="input-group-text" onClick={()=>{
                    setSearchSkus("")
                    setValidateSearchSkus(false)
                    setCurrentPage(1)
                    }}>
                    Annuler
                </button>
                :
                <button type="button" className="input-group-text" onClick={handleClick}>
                    <i className="fas fa-search"></i>
                </button>
            }
      
        </div>

    </div>

    )
}

export default Recherche;
