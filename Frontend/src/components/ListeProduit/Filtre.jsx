import Categorie from "./Filtre/Categorie";
import Marque from "./Filtre/Marque";
import Recherche from "./Filtre/Recherche";
import Univers from "./Filtre/Univers";

const Filtre = () => {
    return (
        <section className="d-flex flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column mt-3">
            <div className="mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-2 mb-2"><Categorie /></div>
            <div className="mx-xxl-3 mx-xl-3 mx-lg-3 mx-md-3 mx-sm-0 mx-0 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-2 mb-2"><Univers /></div>
            <div className="mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-2 mb-2"><Marque /></div>
            <div className="mx-xxl-3 mx-xl-3 mx-lg-3 mx-md-3 mx-sm-0 mx-0"><Recherche /></div>
        </section>
    )
}

export default Filtre;