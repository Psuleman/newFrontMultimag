import { useContext } from "react";
import { ListeContext } from "./Context/ListeContext";
import Recherche from "./Filtre/Recherche";
import Select from "./TemplateForm/Select";

const Filtre = () => {
    const {
        categorieFiltre, setCategorieFiltre, categorieFiltreTab, setCategorieFiltreTab,
        universFiltre, setUniversFiltre, universFiltreTab, setUniversFiltreTab,
        marqueFiltre, setMarqueFiltre, marqueFiltreTab, setMarqueFiltreTab,
        tagFiltre, setTagFiltre, tagFiltreTab, setTagFiltreTab
    } = useContext(ListeContext)

    return (
        <section className="d-flex flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column mt-3">
            <div className="mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-2 mb-2">
                <Select id="categorieFiltreSelect" label="Catégorie" value={categorieFiltre} setValue={setCategorieFiltre} list={categorieFiltreTab} />
            </div>
            <div className="mx-xxl-3 mx-xl-3 mx-lg-3 mx-md-3 mx-sm-0 mx-0 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-2 mb-2">
                <Select id="universFiltreSelect" label="Univers" value={universFiltre} setValue={setUniversFiltre} list={universFiltreTab} />

            </div>
            <div className="mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-2 mb-2">
                <Select id="marqueFiltreSelect" label="Marque" value={marqueFiltre} setValue={setMarqueFiltre} list={marqueFiltreTab} />
            </div>
            <div className="mx-xxl-3 mx-xl-3 mx-lg-3 mx-md-3 mx-sm-0 mx-0 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-2 mb-2">
                <Select id="tagFiltreSelect" label="Tag" value={tagFiltre} setValue={setTagFiltre} list={tagFiltreTab} />
            </div>
            <div><Recherche /></div>
        </section>
    )
}

export default Filtre;