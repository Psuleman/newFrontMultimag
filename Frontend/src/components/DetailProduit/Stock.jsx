const Stock = ({titre, tab}) => {
    //render
    return (
        <section className="mt-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12">
            {titre && <h2 className="text-uppercase titreSection">{titre}</h2>}
            <div className="table">
            <table>
                <thead>
                <tr>
                    <th scope="col"></th>                     
                    <th scope="col">STOCK BOISSY</th>                     
                    <th scope="col">STOCK SEVIGNE</th>                     
                    <th scope="col">STOCK HEROLD</th>                     
                    <th scope="col">STOCK DEPOT</th>                     
                    <th scope="col">STOCK REFERENCE</th>                     
                    <th scope="col">STOCK TOTAL</th>                     
                </tr>
                </thead>
                <tbody>
                    {
                        tab && tab.map((item, index)=>(
                            <tr>
                                <td scope="row"><b>{item.label}</b></td>
                                <td>{item.value[0]}</td>
                                <td>{item.value[1]}</td>
                                <td>{item.value[2]}</td>
                                <td>{item.value[3]}</td>
                                <td>{item.value[4]}</td>
                                <td>{item.value[5]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>

        </section>
    )
}

export default Stock;