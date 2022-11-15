import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Ceintre from "../../../assets/image/cintre-de-vetements.png"
import Moment from "moment"

const ValueReferencement = ({item}) => {
    //variable
    const [showVariant, setShowVariant] = useState(false)
    const [categorie, setCategorie] = useState()
    const [stock, setStock] = useState([])
    const [imgExist, setImgExist] = useState(false)
    const [tagBackground, setTagBackground] = useState("")
    let navigate = useNavigate()

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


        let tab = {
            boissy : 0,
            sevigne : 0,
            herold : 0,
            depot : 0,
            referencement : 0,
            total : 0,  
            taille : ""          
        }
        let arrayTemp = item.variants
        arrayTemp.forEach(element => {
            tab = {
                boissy : tab.boissy + element.stock_18,
                sevigne : tab.sevigne + element.stock_7,
                herold : tab.herold + element.stock_14,
                depot : tab.depot + element.stock_0,
                referencement : tab.referencement + element.stock_9,
                total : tab.total + element.stock_3,
                taille : tab.taille + ", " + element.taille_fnr
            }
            
        });
        tab.taille = tab.taille.substring(1)
        setStock(tab)

        /**
         * Categorie
         */
        if(item.filtre){
            let categorieItem = item.filtre ? item.filtre.sousCategorieRef.categorieRef.categorieRef : item.categorie_univers
            categorieItem += " > " + (item.filtre ? item.filtre.filtre : item.sous_categorie_fnr)
            setCategorie(categorieItem)
        }
    }, [])

    const handleClick = () => {
        let path = `/produit/` + item.sku + ``;
        navigate(path)
    }
    
    //Render
    return (
            <tr>
                <td className="px-2"><a href={item.lien} target="black">{item.sku}</a></td>
                <td className="px-2">{item.saison}</td>
                <td className="px-2">{Moment(item.date_arrivee).format("DD-MM-YYYY")}</td>
                <td className="px-2">{item.dateRef ? Moment(item.dateRef).format("DD-MM-YYYY") : ""}</td>
                <td className="px-2">{item.marque ? item.marque : item.nom_fournisseur}</td>
                <td className="px-2">{item.univers}</td>
                <td className="px-2">{categorie ? categorie : item.filtre.filtre}</td>
                <td className="px-2">{item.couleur}</td>
                <td className="px-2">{item.tarifs[0].prix_vente} €</td>
                <td className="px-2">{item.tarifs[0].remise ? item.tarifs[0].remise : 0}</td>
                <td className="px-2">
                {
                    imgExist ? 
                    <img src={item.pictures} alt="non disponible" /> 
                    :
                    <img src={Ceintre} alt="non disponible" className="imgListTab" />
                }
                </td>
                {
                    item.code_tag == 0 ? 
                    <td className="px-2 text-bg-warning">Non tagué</td>
                    :
                    <td className="px-2">{item.tag}</td>
                }
                <td className="px-2">
                    <center>
                        <div className="modifier text-muted" onClick={handleClick}>
                            <i class="fa fa-pen"></i>
                        </div>
                    </center>
                </td>                
            </tr>
    )
}
export default ValueReferencement;


