import { useContext } from "react";
import { NouveauProduitContext } from "./Context/NouveauProduitContext";

const TraitementDone = () => {
    const {totaldata, totalNewProduct, finImport} = useContext(NouveauProduitContext)
    //render
    return (
        <div className="pt-3 px-3 pb-4">
            {
                totaldata && <div>{totaldata} produits importer</div>
            }
            {
                totaldata && finImport && <div>
                {
                    totalNewProduct>1 ?
                    <h5>{totalNewProduct} nouveaux produits sur {totaldata} produits importer</h5> 
                    : 
                    <h5>{totalNewProduct} nouveau produit sur {totaldata} produits importer</h5> 
                }
            </div>
            }

        </div>   
    )
}
export default TraitementDone;