import { useEffect } from "react"
import { useState } from "react"

const TypeLivraison = () => {

    const [isChecked, setIsChecked] = useState({})

    useEffect(()=>{
        if(!isChecked.livrePar && !isChecked.recupererPar){
        setIsChecked({
            livrePar : true,
            recupererPar : false
        })
        }

        console.log("isChecked ", isChecked)
    }, [isChecked])    
    
    const handleChangeLivraison = () => {
        setIsChecked({
            livrePar: !isChecked.livrePar,
            recupererPar: !isChecked.recupererPar
        })
    }


    //render
    return (
    <div className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <label className="form-check-label" htmlFor="flexCheckChecked">Type de livraison</label>
        <div className="form-check">
            {
                isChecked.livrePar ?  
                <input className="form-check-input" type="checkbox" onChange={handleChangeLivraison}  id="flexCheckDefault" checked/>
                :
                <input className="form-check-input" type="checkbox" onChange={handleChangeLivraison}  id="flexCheckDefault"/>
            }
            
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Livré par
            </label>
        </div>
        <div className="form-check">
            {
                isChecked.recupererPar ?
                <input className="form-check-input" type="checkbox" onChange={handleChangeLivraison} id="flexCheckChecked" checked />
                :
                <input className="form-check-input" type="checkbox" onChange={handleChangeLivraison} id="flexCheckChecked" />

            }
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Récupérer en magasin
            </label>
        </div>
    </div>
    )
}


export default TypeLivraison