import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const HeaderForm = ({title, section, isDone=null}) => {
    //Variable
    const {sectionUpdate, setSectionUpdate, isSuccessSave, messageSave, sectionSave} = useContext(FormulaireContext)

    //fonction

    //render
    return (
        <div className="card-header bg-transparent d-flex justify-content-between cursor-pointer" onClick={()=>{ (sectionUpdate == section) ? setSectionUpdate("") : setSectionUpdate(section) }} >
            <div className="me-3">{title}</div>
            <div className="text-success">{isDone!=null && isDone && <span><FontAwesomeIcon icon={faCircleCheck} /> <small>Terminé</small></span>}</div>
            <div className="text-danger">{isDone!=null && !isDone && <span><FontAwesomeIcon icon={faCircleExclamation} /> <small>A modifier</small></span>}</div>
            <div className="text-info">{isDone==null && <span><FontAwesomeIcon icon={faCircleExclamation} /> <small>Champs facultatif vide</small></span>} </div>

            {
                isSuccessSave && messageSave!="" && section==sectionSave &&
                <div class="alert alert-success ms-3" role="alert">{messageSave}</div>
            }
            {
                !isSuccessSave && messageSave!="" && section==sectionSave &&
                <div class="alert alert-danger ms-3" role="alert"> {messageSave}</div>
            }

            <div className="ms-auto">
            {
                (sectionUpdate == section) ?
                <i className="fas fa-chevron-up"></i>
                :
                <i className="fas fa-chevron-down"></i>
            }                
            </div>

    </div>
    )
}

export default HeaderForm;