import { useContext } from "react";
import { FormulaireContext } from "../Context/FormulaireContext";

const HeaderForm = ({title, section}) => {
    //Variable
    const {sectionUpdate, setSectionUpdate} = useContext(FormulaireContext)

    //fonction
    const handleClick = () => {
        console.log
    }
    //render
    return (
        <div className="card-header bg-transparent d-flex justify-content-between cursor-pointer"
            onClick={()=>{
                (sectionUpdate == section) ? setSectionUpdate("") : setSectionUpdate(section)
            }}
        >
        <div>{title}</div>
        {
            (sectionUpdate == section) ?
            <div><i className="fas fa-chevron-up"></i></div>
            :
            <div><i className="fas fa-chevron-down"></i></div>
        }
    </div>
    )
}

export default HeaderForm;