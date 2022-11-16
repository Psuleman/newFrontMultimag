import { useEffect } from "react"
import { useContext } from "react"
import { FormulaireContext } from "../Context/FormulaireContext"
import { setGrilleTailleList } from "../../../services/taille.service"
import InputDesabled from "../TemplateFormulaire/InputDesabled"
import { useState } from "react"
import { TailleContext } from "./Context/TailleContext"
import Loading from "../../Layout/Loading"

const TailleVariant = () => {
    const {infoSku, grilleTailleUpdate, attributUpdate, setAttributUpdate} = useContext(FormulaireContext)  
    const {setLoading, loading} = useContext(TailleContext)

    const [tailles, setTailles] = useState([]) 
    useEffect(()=>{
        if(grilleTailleUpdate && grilleTailleUpdate != ""){
            console.log("loding true")
            setLoading(true)
            const promise = Promise.resolve(setGrilleTailleList(grilleTailleUpdate));
            promise.then((value) => {
                // 0: Object { taille_ref: "IT 10", stock_id: "Bagues ITALIE_IT 10", stock_code: "10" }

                /**
                 * mise à jour attribut update
                 */
                if(attributUpdate && value && value[0]){
                    console.log("ici")
                    for(let item in attributUpdate){
                        let existStockId = false
                        value[0].tailleRefs.forEach(element => {
                            // console.log("attribut ", attributUpdate[item].taille_fnr)
                            // console.log("element ", element.stock_code)
                            let stock_code = element.stock_code + ""
                            let tailleFrn = attributUpdate[item].taille_fnr + ""

                            if(stock_code == tailleFrn){
                                existStockId = true
                                console.log("element = ", element)
                                console.log("attribut = ", attributUpdate)
                                setAttributUpdate((oldState)=>{
                                    let newState = [...oldState]
                                    newState[item].taille_ref.taille_ref = element.taille_ref
                                    return newState
                                })
                            }

                        });
                        if(!existStockId){
                            setAttributUpdate((oldState)=>{
                                let newState = [...oldState]
                                newState[item].taille_ref.taille_ref = null
                                return newState
                            })
                        }
                    }
                    console.log("tailles ", value[0].tailleRefs)
                    setTailles(value[0].tailleRefs) 
                    console.log("loding false")
                    setLoading(false)
                }

            })
        }

    }, [grilleTailleUpdate])
    //render
    return (
        <div>
        {
            !loading &&
            grilleTailleUpdate &&
            (tailles && attributUpdate) &&
            attributUpdate.map((i, index)=>
            <section  className="row g-3 mt-1">
                <InputDesabled id={"inputVariant" + i.variant_sku} label="Taille fournisseur" value={i.taille_fnr} />
                <div className="col-md-3">
                    <label  htmlFor="selectTaille" className="form-label">Taille {attributUpdate[index].tailleRef}</label>
                    {
                        (grilleTailleUpdate || grilleTailleUpdate!="") ?
                        <select className="form-select" aria-label="Default select example" id="selectTaille" value={attributUpdate[index].taille_ref.taille_ref} onChange={(e)=>{
                            setAttributUpdate((oldState)=>{
                                let newState = [...oldState]
                                newState[index].taille_ref.taille_ref = e.target.value
                                return newState
                            })
                            console.log(attributUpdate)
                        }}>
                            <option selected>Choisissez</option>
                            {
                                tailles &&
                                tailles.map((i)=>(
                                    <option key={i.taille_ref} value={i.taille_ref}>{i.taille_ref}</option>
                                ))
                            }
                        </select>   
                        :
                        <select className="form-select" aria-label="Default select example" id="selectTaille" >
                            <option selected>Choisissez</option>
                        </select>   
                    }

                </div>  
            </section>
            )
        }
        { loading && <Loading/>}
        </div>
    )
}

export default TailleVariant