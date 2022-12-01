let url = "http://212.129.3.31:8080/api/filtre_refs"
// let url = "http://localhost:8001/api/filtre_refs"


const headerGET = {
    method: 'GET',
    headers: {
        accept: 'application/ld+json',
        //Authorization : `Bearer ${token}` 			
    },
    cache: "default",
}
export const getAllFiltre = () => {
    let urlRequestTotal = url
    let tab = fetch(urlRequestTotal, headerGET)
    .then(function(res) {
        ////console.log(res.json())
        return res.json();
    })
    .then(function(value) {
        return value;
    })
    .catch(function(err) {
        //(err)
    })
    return tab;
}

export const getFiltre = (filtre) => {
    let urlRequestTotal = url + "?filtre=" + filtre
    let tab = fetch(urlRequestTotal, headerGET)
    .then(function(res) {
        ////console.log(res.json())
        return res.json();
    })
    .then(function(value) {
        return value;
    })
    .catch(function(err) {
        //(err)
    })
    return tab; 
}