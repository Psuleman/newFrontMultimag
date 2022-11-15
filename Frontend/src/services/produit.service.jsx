//let url = "http://212.129.3.31:8080/api/produits/"
let url = "http://localhost:8001/api/produits"
const headerGET = {
    method: 'GET',
    headers: {
        accept: 'application/ld+json',
        //Authorization : `Bearer ${token}` 			
    },
    cache: "default",
}

export const getAllProduit = (listeProduit="", filtre="") => {
    let urlRequestTotal = url + "?page=1"
    if(listeProduit=="referencement"){
        urlRequestTotal += `&newProduit=1&referencer=0`
    }
    if(listeProduit=="modification"){
        urlRequestTotal += `&newListAttente=1`
    }    
    if(listeProduit=="export"){
        urlRequestTotal += `&referencer=1`
    }

    console.log("url", urlRequestTotal)
    /**
     * filtre
     */
    if(filtre!=""){
        urlRequestTotal += filtre
    }
    let tab = fetch(urlRequestTotal, headerGET)
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

export const getProduitproduit = (id) => {

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

export const setNewProduit = (data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 
        'Content-Type': 'application/json',
        accept: 'application/json',
        //Authorization : `Bearer ${token}`
        },
        body: JSON.stringify(data)
    };
    
    //fetch('http://212.129.3.31:8080/api/produits', requestOptions)
    let result = fetch(url, requestOptions)
    .then(response => {
        return response
    })
    //.then(data => return data)
    .catch(err=>{
        //console.log(err)
    });	

    return result;
}

