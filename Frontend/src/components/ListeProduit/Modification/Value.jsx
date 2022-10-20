import Moment from "moment"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Ceintre from "../../../assets/image/cintre-de-vetements.png"

const Value = ({item}) => {
    //variable
    const [showVariant, setShowVariant] = useState(false)
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
                boissy : tab.boissy + element.stockages[0].stock_18,
                sevigne : tab.sevigne + element.stockages[0].stock_7,
                herold : tab.herold + element.stockages[0].stock_14,
                depot : tab.depot + element.stockages[0].stock_0,
                referencement : tab.referencement + element.stockages[0].stock_9,
                total : tab.total + element.stockages[0].stock_3,
                taille : tab.taille + ", " + element.taille_fnr
            }
            
        });
        tab.taille = tab.taille.substring(1)
        setStock(tab)
    }, [])

    const handleClick = () => {
        let path = `/produit/` + item.sku + ``;
        navigate(path)
    }

    //render
    return (
        <tbody>
            <tr>
                <td className="px-2"><a href={item.lien} target="black">{item.sku}</a></td>
                <td className="px-2">{item.saison}</td>
                <td className="px-2">{Moment(item.date_arrivee).format("DD-MM-YYYY")}</td>
                <td className="px-2">{item.dateRef ? Moment(item.dateRef).format("DD-MM-YYYY") : ""}</td>
                <td className="px-2">{item.marque ? item.marque : item.nom_fournisseur}</td>
                <td className="px-2">{item.univers}</td>
                <td className="px-2">{item.filtre ? item.filtre.sousCategorieRef.categorie_ref.categorie_ref : item.categorie_univers} > {item.filtre ? item.filtre.filtre : item.sous_categorie_fnr}</td>
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

        </tbody>
    )
}

export default Value

