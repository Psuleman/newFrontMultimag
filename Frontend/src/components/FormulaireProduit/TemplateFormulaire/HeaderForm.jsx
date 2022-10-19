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
        <div className="card-header bg-transparent d-flex justify-content-between"
            onClick={()=>{
                (sectionUpdate == section) ? setSectionUpdate("") : setSectionUpdate(section)
            }}
            style={{
                cursor: "pointer"
            }}
        >
        <div>{title}</div>
        {
            (sectionUpdate == section) ?
            <div><i class="fas fa-chevron-up"></i></div>
            :
            <div><i class="fas fa-chevron-down"></i></div>
        }
    </div>
    )
}

export default HeaderForm;