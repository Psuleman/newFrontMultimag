import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Ceintre from "../../../assets/image/cintre-de-vetements.png"
import Moment from "moment"
import { useContext } from "react"
import { ListeContext } from "../Context/ListeContext"
import { ListeExportContext } from "../Context/ListeExportContext"

const ValueExport = ({item, index}) => {
    const {listesProduit, setListesProduit, setListesProduitExport, listesProduitExport} = useContext(ListeExportContext)
    //variable
    const [showVariant, setShowVariant] = useState(false)
    const [categorie, setCategorie] = useState()
    const [stock, setStock] = useState([])
    const [imgExist, setImgExist] = useState(false)
    const [tagBackground, setTagBackground] = useState("")
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [imgAltText, setImgAltText] = useState()

    let navigate = useNavigate()

    const {liste} = useContext(ListeContext)

    let image = ""
    let images = item.image_src
    images = images.split(";")

    image = images[0];
    //fonction
    useEffect(()=>{
        // if(listesProduitExport){
        //     //image
        //     fetch(item.pictures)
        //     fetch(image)
        //     .then(function(response) {
        //         if(response.status != 404){
        //             setImgExist(true)

        //             setListesProduitExport(oldState=>{
        //                 let newState = [...oldState]
        //                 //newState[index].image_exist = "TRUE"

        //                 return newState
        //             })
        //         }
        //         else{
        //             setImgExist(false)
        //             setListesProduitExport(oldState =>{
        //                 let newState = [...oldState]
        //                 //newState[index].image_exist = "FALSE"

        //                 return newState
        //             })
        //         }
            
        //     })
        //     .then(function(myBlob) {

        //     }).catch((err)=>{});
        // }


        /**
         * Title, description, img_alt_text
         */
         item.title && setTitle(subStr(item.title))
         item.descriptionFr && setDescription(subStr(item.descriptionFr))
         item.img_alt_text && setImgAltText(subStr(item.img_alt_text))
        /**
         * Categorie
         */
        if(item.filtre){
            let categorieItem = (item.filtre_produit) ? item.categorie : item.categorie_univers
            categorieItem += " > " + (item.filtre_produit ? item.filtre_produit : item.sous_categorie_fnr)
            setCategorie(categorieItem)
        }
    }, [item, listesProduit, listesProduitExport])


    const subStr = (text) => {
        text=text.replace(`\"\"`, '@')
        text=text.replace(`\"`, '')

        text = text.replace('@', '"' )

        //console.log(text)
    }
    const handleClick = () => {
        let path = `/produit/` + parseInt(item.sku_integer) + ``;
        navigate(path)
    }
    
    const handleChange = () => {
        let check = !listesProduit[index].isChecked
        let sku = item.sku_integer;

        console.log(sku)

        setListesProduit(oldState=>{
            let newState = [...oldState]

            for(let i in newState){
                if(newState[i].sku_integer == sku){
                    newState[i].isChecked = check
                }
            }

            return newState
        })


        let tab = []

        for(let i in listesProduit){
            if(check == false){
                if(listesProduit[i].sku_integer != sku &&  listesProduit[i].isChecked == true){
                    tab.push(listesProduit[i])
                    console.log(sku)
                }
                else{
                    //console.log(sku , " d??cocher ")
                }                
            }
            else{
                if(listesProduit[i].sku_integer == sku || listesProduit[i].isChecked == true){
                    tab.push(listesProduit[i])
                    console.log(sku)
                }
                else{
                    //console.log(sku , " d??cocher ")
                }                 
            }

        }
        setListesProduitExport(tab)
        
        
    }

    //Render
    return (
        <tbody>
            {
            item.title &&
            <tr>
                <td className="px-2 detailSku">
                {
                    item.isChecked && item.title &&  <input className="form-check-input" type="checkbox" onChange={handleChange} checked/>
                }
                {
                    (!item.isChecked && item.title) && <input className="form-check-input" onChange={handleChange} type="checkbox"/>
                }                    
                    
                </td>
                <td className="px-2 sku">{item.sku_integer}</td>
                <td className="px-2">{item.title}</td>              
                <td className="px-2">{item.marque}</td>              
                <td className="px-2">{item.categorie}</td>              
                <td className="px-2">{item.attribut}</td>              
             
                <td className="px-2">{item.variant_sku}</td>              
                <td className="px-2">{item.prixVente}</td>              
                <td className="px-2">{item.prixVenteRemise}</td>              
                <td className="px-2">{item.reference_fournisseur}</td>              
             
                <td className="px-2">{item.univers}</td>              
                <td className="px-2">{item.paysOrigine}</td>              
                <td className="px-2">{item.custum_fields_sizing}</td>              
                <td className="px-2">{item.coupe}</td>              
                <td className="px-2">{item.couleur}</td>              
                <td className="px-2">{item.entretien}</td>             
                <td className="px-2">{item.matiere1} {item.pourcentageMatiere1}</td>              
                <td className="px-2">{item.matiere2} {item.pourcentageMatiere2}</td>              
                <td className="px-2">{item.matiere3} {item.pourcentageMatiere3}</td>              
                <td className="px-2">{item.matiere4} {item.pourcentageMatiere4}</td>              
                <td className="px-2">{item.matiere5} {item.pourcentageMatiere5}</td>              
                <td className="px-2">{item.matiere6} {item.pourcentageMatiere6}</td>              
                <td className="px-2">{item.matiere7} {item.pourcentageMatiere7}</td>              
                <td className="px-2">{item.matiere8} {item.pourcentageMatiere8}</td>              
                <td className="px-2">{item.matiere9} {item.pourcentageMatiere9}</td>              
                <td className="px-2">{item.matiere10} {item.pourcentageMatiere10}</td>
                <td className="px-2 action">
                    <center>
                        {
                            item.title && 
                            <div className="modifier text-muted" onClick={handleClick}>
                                <i class="fa fa-pen"></i>
                            </div>
                        }
                    </center>
                </td>  
            </tr>                 
            }
           
        </tbody>

    )
}
export default ValueExport;


