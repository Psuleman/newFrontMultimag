import { useState } from "react"
import "../../../assets/scss/table.scss"
import Header from "../Header"

const Table = () => {
    //variable
    const [tab, setTab] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])
    //fonction

console.log(tab)
    //render
    return (
        <section>
            <Header page="referencement" />
            <div>
                <table>
                    <thead>
                    <tr>
                        <th className="px-2">SKU</th>
                        <th className="px-2">SAISON</th>
                        <th className="px-2">REÇU LE</th>
                        <th className="px-2">DATE REF</th>
                        <th className="px-2">MARQUE</th>
                        <th className="px-2">UNIVERS</th>
                        <th className="px-2">CATEGORIE</th>
                        <th className="px-2">COULEUR</th>
                        <th className="px-2">PRIX</th>
                        <th className="px-2">PRIX + REMISE</th>
                        <th className="px-2">PICTURES</th>
                        <th className="px-2">ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            tab && tab.map((item, index)=>(
                                <tr key={index}>
                                    <td className="px-2">SKU</td>
                                    <td className="px-2">SAISON</td>
                                    <td className="px-2">REÇU LE</td>
                                    <td className="px-2">DATE REF</td>
                                    <td className="px-2">MARQUE</td>
                                    <td className="px-2">UNIVERS</td>
                                    <td className="px-2">CATEGORIE</td>
                                    <td className="px-2">COULEUR</td>
                                    <td className="px-2">PRIX</td>
                                    <td className="px-2">PRIX + REMISE</td>
                                    <td className="px-2">PICTURES</td>
                                    <td className="px-2">ACTION</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Table;
