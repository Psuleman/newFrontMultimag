import { useContext } from 'react'
import { ListeContext } from './Context/ListeContext'
import Header from './Header'
import ThListes from './Thead/ThListes'
import ThReferencement from './Thead/ThReferencement'
import ThModification from './Thead/ThModification'
import ThExport from './Thead/ThExport'
import ValueListe from './Value/ValueListe'
import ValueReferencement from './Value/ValueReferencement'

const Table = () => {
    const {skus, totalSkus, liste} = useContext(ListeContext)
    //render
    return (
        <section>
            <Header/>
            <div className="table">
                <table>
                    { liste == "listes" && <ThListes/>}
                    { liste == "referencement" && <ThReferencement/> }
                    { liste == "modification" && <ThModification/>}
                    { liste == "export" && <ThExport/>}
                    {
                        skus && totalSkus && totalSkus==0 && 
                        <tbody>
                            <tr>AucunProduit</tr>
                        </tbody>
                    } 
                    {
                        skus && totalSkus && totalSkus>0 && liste == "listes" && 
                        skus.map((item, index)=>( <ValueListe item={item} />))
                    }
                    {
                        skus && totalSkus && totalSkus>0 && liste == "referencement" && 
                        skus.map((item, index)=>( <ValueReferencement item={item} />))
                    }                   
                </table>
            </div>
        </section>
    )
}

export default Table