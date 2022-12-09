const Droits = ({droits}) => {

    console.log("droits", droits)
    //render
    return (
        <section className="list-group dropdown">
            <div className="form-select" data-bs-toggle="dropdown">Choisissez</div>  
            <div className="dropdown-menu section-list-select p-0">
                <div className="height-select border border-1">
                {
                    droits && droits.map((item, inde)=>(
                        <div>Test</div>
                    ))
                }
                </div>     
            </div>
        </section>
    )
}

export default Droits