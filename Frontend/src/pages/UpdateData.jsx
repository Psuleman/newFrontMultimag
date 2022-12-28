import { useState, useEffect } from "react"
import Papa from "papaparse"
import Moment from 'moment'
import { setNewProduit } from "../../services/produit.service"
import { useContext } from "react"
import { NouveauProduitContext } from "./Context/NouveauProduitContext"

const UpdateData = () => {
    const [file, setFile] = useState()
    const [data, setData] = useState()
    const [patienceImport, setPatienceImport] = useState()
    const [finImport, setFinImport] = useState()
    const [progressBar, setProgressBar] = useState()
    const [totalData, setTotaldata] = useState()
    const [totalNewProduct , setTotalNewProduct] = useState()

    let i = 0
    //fonction
    useEffect(()=>{
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                if(data && data.length>0){
                    ////console.log(data.length)
                    let dateNow = Moment().format('YY')
                    dateNow = parseInt(dateNow)
                    
                    //Comparaison
                    //setTotalNewProduct(data.length)
                    let compteur = 0
                    let compteurNewProduct = 0

                    //console.log(data)
                    let donnees = []

                    let variant_sku = data[34].split('_')
                    


                    //console.log(donnees)


                }
                else{
                    /**
                     * A compléter
                     */
                    //  setFinImport(true)
                    //  setTotalNewProduct(0)
                    //  setPatienceImport(false)                        


                }
            }            
        }
        else{
            navigate('/')
        }

    }, [data])

    const handleSubmit = (e) => {
        //réinitialisation
        e.preventDefault()

        setFinImport(false)
        setPatienceImport(true)

        let fichier = file[0].name
        fichier = fichier.split('.')
        let extension = fichier[1]

        if(file){
            if(extension == "csv"){
                Papa.parse(file[0],{
                complete: function(resultat){
                    //setData(resultat.data)

                    /**
                     * debut 
                     */
                    let donnees = resultat.data

                    setTotaldata(donnees.length)

                    let dateAnterieur = Moment().subtract(5,'d').format('YYYY-MM-DD')
                    // let dateAnterieur = Moment().subtract(300,'d').format('YYYY-MM-DD')

                    let tabTemporaire = []

                    for(let i in donnees){
                        let dateProduit = Moment(donnees[i][1], 'DD/MM/YYYY').format("YYYY-MM-DD")
                        if(Moment(dateProduit).isAfter(dateAnterieur)){
                            ////console.log(dateAnterieur)
                            tabTemporaire.push(donnees[i])
                        }
                    }

                    if((tabTemporaire.length)>0){
                        setData(tabTemporaire) //A REMETTRE
                    }
                    else{
                     setFinImport(true)
                     setTotalNewProduct(0)
                     setPatienceImport(false)                      
                    }
                    /**
                     * FIN
                     */

                //     let donnees = resultat.data
                //     setTotaldata(donnees.length)
                //     let datedeb = Moment("2022-09-31").format('YYYY-MM-DD')
                //     let datefin = Moment("2022-10-01").format('YYYY-MM-DD')

                //     let tabTemporaire = []
                //     for(let i in donnees){
                //         let dateProduit = Moment(donnees[i][1], 'DD/MM/YYYY').format("YYYY-MM-DD")
                        
                //             if(
                //             (Moment(dateProduit).isAfter(datedeb))
                //             // && 
                //             // (Moment(dateProduit).isBefore(datefin))
                //             ){
                //             //console.log("test")
                //             tabTemporaire.push(donnees[i])
                //             }
                //             else{
                //             ////console.log(dateProduit)
                //             }
                // }
                //     setData(tabTemporaire)
                //     //console.log(tabTemporaire)
                }})

            }
        }	
    }
    //render
    return (
        <div id="newProduit" className="pt-3 px-3 pb-4">
            <div>Importer le fichier product.csv de multimag</div>
            <small>Tous les champs sont obligatoires.</small>
            <form className="mt-3"  onSubmit={handleSubmit}>
            <div className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <label htmlFor="formFile" className="form-label">Votre fichier</label>
                <input className="form-control" type="file" id="formFile" required onChange={(e)=>{setFile(e.target.files)}}  />
            </div>

            <div>
                <button className="btn btn-outline-dark">Envoyer</button>
            </div>
            </form>
        </div>
    )
}

export default Formulaire;
