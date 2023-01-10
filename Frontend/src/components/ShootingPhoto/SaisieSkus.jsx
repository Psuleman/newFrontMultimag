import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { ShootingContext } from "./Context/ShootingContext"
import SkuItem from "./SkuItem"

const SaisieSkus = () => {
    const {nombreSkus, listSkus, setListSkus} = useContext(ShootingContext)

    useEffect(()=>{
    }, [nombreSkus])


    const handleClick = () => {
        console.log(listSkus)
    }

    //render
    return (
        <div className="pt-3 px-3 pb-4">
            <div className="mb-3">Saisissez les skus des produits reçus</div>
            {
                listSkus && listSkus.length>0 && listSkus.map((item, index)=>(
                  <SkuItem index={index} />
                ))

            }

            <div>
                <button className="btn btn-dark" onClick={handleClick}>Valider</button>
            </div>  
        </div>
    )
}

export default SaisieSkus