const Droits = ({droits}) => {

    //render
    return (
        <section className="list-group dropdown">
            <div className="form-select" data-bs-toggle="dropdown">Choisissez</div>  
            <div className="dropdown-menu section-list-select p-0">
                <div className="height-select border border-1">
                {
                    droits && droits.map((item, inde)=>(
                        <div className="form-check mx-2 py-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {item}
                            </label>
                        </div>


                    ))
                }
                </div>     
            </div>
        </section>
    )
}

export default Droits