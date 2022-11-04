import { useContext } from "react"
import { SelectContext } from "../Context/SelectContext"

const InputSearch = ({placeholder}) => {
    const {search, setSearch} = useContext(SelectContext)
    //render
    return (
        <div className="list-group-item dropdown-item p-0">
        <div className="input-group">
            <span className="input-group-text rounded-0 border border-0" id="basic-addon1"><i className="fas fa-search"></i></span>
            <input type="text" className="form-control rounded-0 border border-0" placeholder={placeholder} aria-label="Pays" aria-describedby="basic-addon1" value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>
        </div>    
    )
}
export default InputSearch