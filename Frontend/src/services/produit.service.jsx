const headerGET = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        //Authorization : `Bearer ${token}` 			
    },
    cache: "default",
}
//let url = "http://212.129.3.31:8080/api/produits/"
let url = "http://localhost:8001/api/produits"

export const getAllProduit = (url) => {
    let urlRequestTotal = url
    let tab = fetch(urlRequestTotal, header)
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
    return tab;
}

export const getProduitproduit = (url, id) => {

}
export const setProduit = (id, data) => {
    const headerPATCH = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/merge-patch+json',
        accept: 'application/ld+json',
        //Authorization : 'Bearer ' + token
        },					
        body: JSON.stringify(data)
    }
    let urlPatch = url + "/" + id
    console.log("urlPatch", urlPatch)

    let result = fetch(urlPatch, headerPATCH)
    .then(res => {
        return res;
    })
    .then(value => {return value;})
    .catch(err => setEchecUpdates(true));
    
    return result
}