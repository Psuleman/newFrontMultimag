import { useContext } from "react"
import { ValueTableauContext } from "./Context/ValueTableauContext"

const Password = () => {
    const {password, setPassword} = useContext(ValueTableauContext)
    
    //fonction
    const handleClick = () => {
        let tableau = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n", "A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N", 1,2,3,4,5,6,7,8,9,0, "$","&","!","@","#","*","?"];



        let mot = ""
        let totalChar = tableau.length
        for(let i = 0; i<12; i++){
            let index = Math.floor(Math.random() * totalChar);

            mot+= tableau[index]
        }
            
        setPassword(mot)
}

    //render
    return (
        <div className="input-group">
			<input type="text" className="form-control" id="exampleFormControlPassword" placeholder="" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>Générer</button>
        </div>

    )
}

export default Password