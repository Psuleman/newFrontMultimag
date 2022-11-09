//let url = "http://212.129.3.31:8080/api/grille_taille_refs/"
let url = "http://localhost:8001/api/grille_taille_refs"

const headerGET = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        //Authorization : `Bearer ${token}` 			
    },
    cache: "default",
}

export const setGrilleTailleList = (grilleTaille) => {
    let urlList = url + "?grilleTailleRef=" + grilleTaille
    let result = fetch(urlList, headerGET)
    .then(function(res) {
        //console.log(res.json())
        return res.json();
    })
    .then(function(value) {
        return value;
    })
    .catch(function(err) {
        //(err)
    })

    return result
}