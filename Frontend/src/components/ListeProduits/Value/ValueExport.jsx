import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Ceintre from "../../../assets/image/cintre-de-vetements.png"
import Moment from "moment"
import { useContext } from "react"
import { ListeContext } from "../Context/ListeContext"

const ValueExport = ({item}) => {
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

    //fonction
    useEffect(()=>{
		//image
		fetch(item.pictures)
		.then(function(response) {
			if(response.status != 404){
				setImgExist(true)
			}
			else{
				setImgExist(false)
			}
		  
		})
		.then(function(myBlob) {

		}).catch((err)=>{});

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
            let categorieItem = item.filtre ? item.filtre.sousCategorieRef.categorieRef.categorieRef : item.categorie_univers
            categorieItem += " > " + (item.filtre ? item.filtre.filtre : item.sous_categorie_fnr)
            setCategorie(categorieItem)
        }
    }, [item])

    const subStr = (text) => {
        text=text.replace(`\"\"`, '@')
        text=text.replace(`\"`, '')

        text = text.replace('@', '"' )

        console.log(text)
    }
    const handleClick = () => {
        let path = `/produit/` + item.sku + ``;
        navigate(path)
    }
    
    //Render
    return (
        <tbody>
            <tr>
                <td className="px-2 detailSku"><a href={item.lien} target="black">{item.sku}</a></td>
                <td className="px-2">{item.command}</td>              
                <td className="px-2">{item.title}</td>              
                <td className="px-2">{item.descriptionFr}</td>              
                <td className="px-2">{item.marque}</td>              
                <td className="px-2">{item.categorie}</td>              
                <td className="px-2">{item.tags}</td>              
                <td className="px-2">{item.tags_command}</td>              
                <td className="px-2">{item.published}</td>              
                <td className="px-2">{item.published_scope}</td>              
                <td className="px-2">{item.image_command}</td>              
                <td className="px-2">{item.img_alt_text}</td>                              
                <td className="px-2">{item.variant_command}</td>              
                <td className="px-2">{item.taille}</td>              
                <td className="px-2">{item.attribut}</td>              
                <td className="px-2">{item.option_2_name}</td>              
                <td className="px-2">{item.option_2_value}</td>              
                <td className="px-2">{item.option_3_name}</td>              
                <td className="px-2">{item.option_3_value}</td>              
                <td className="px-2">{item.variant_position}</td>              
                <td className="px-2">{item.variant_sku}</td>              
                <td className="px-2">{item.prixVente}</td>              
                <td className="px-2">{item.shipping}</td>              
                <td className="px-2">{item.taxable}</td>              
                <td className="px-2">{item.referenceFournisseur}</td>              
                <td className="px-2">{item.inventory_tracker}</td>                          
                <td className="px-2">{item.inventory_policy}</td>              
                <td className="px-2">{item.fulfillment_service}</td>              
                <td className="px-2">{item.univers}</td>              
                <td className="px-2">{item.paysOrigine}</td>              
                <td className="px-2">{item.custum_fields_sizing}</td>              
                <td className="px-2">{item.coupe}</td>              
                <td className="px-2">{item.TaillePorteeMannequin}</td>              
                <td className="px-2">{item.couleur}</td>              
                <td className="px-2">{item.entretien}</td>             
                <td className="px-2">{item.matiere1}</td>              
                <td className="px-2">{item.pourcentageMatiere1}</td>              
                <td className="px-2">{item.matiere2}</td>              
                <td className="px-2">{item.pourcentageMatiere2}</td>              
                <td className="px-2">{item.matiere3}</td>              
                <td className="px-2">{item.pourcentageMatiere3}</td>                  
                <td className="px-2">{item.matiere4}</td>              
                <td className="px-2">{item.pourcentageMatiere4}</td>      
                <td className="px-2">{item.matiere5}</td>              
                <td className="px-2">{item.pourcentageMatiere5}</td>              
                <td className="px-2">{item.matiere6}</td>              
                <td className="px-2">{item.pourcentageMatiere6}</td>              
                <td className="px-2">{item.matiere7}</td>              
                <td className="px-2">{item.pourcentageMatiere7}</td>              
                <td className="px-2">{item.matiere8}</td>              
                <td className="px-2">{item.pourcentageMatiere8}</td>              
                <td className="px-2">{item.matiere9}</td>              
                <td className="px-2">{item.pourcentageMatiere9}</td>              
                <td className="px-2">{item.matiere10}</td>
                <td className="px-2">{item.pourcentageMatiere10}</td>              
                <td className="px-2">{item.custom_product}</td>                     
                <td className="px-2 action">
                    <center>
                        <div className="modifier text-muted" onClick={handleClick}>
                            <i class="fa fa-pen"></i>
                        </div>
                    </center>
                </td>  
            </tr>            
        </tbody>

    )
}
export default ValueExport;


