import { useEffect } from "react"

const Description = ({titre, tab}) => {

    useEffect(()=>{}, [tab])
    console.log(tab)
    //render
    return (
        <section className="mt-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12">
            {titre && <h2 className="text-uppercase titreSection">{titre}</h2>}
            {
                tab &&
                <div className="table">
                <table>
                    <thead>
                        <tr>
                        {
                            tab && tab.map((item, index)=>(
                                <th key={"header_table_" + index}>{item.label}</th>
                            ))
                        }                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {
                            tab && tab.map((item, index)=>(
                                <td>{item.value}</td>
                            ))
                        }
                        </tr>
                    </tbody>
                </table>
                </div>                
            }



        </section>
    )
}

export default Description