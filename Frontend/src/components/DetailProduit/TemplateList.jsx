import "../../assets/scss/detailProduit.scss"

const TemplateList = ({titre, tab}) => {
    //render
    return (
        <section className="mb-3">
            {titre && <h2 className="text-uppercase titreSection">{titre}</h2>}
            
            {
                tab && tab.map((item, index)=>(
                    <dl className="row">
                    <dt className="col-sm-3">{item.label}</dt>
                    <dd className="col-sm-9">{item.value ? item.value : "-"}</dd>
                    </dl>
                ))
            }                
            

        </section>
    )
}

export default TemplateList