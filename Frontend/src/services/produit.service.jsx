let url = "http://212.129.3.31:8080/api/produits"
// let url = "http://localhost:8001/api/produits"
const headerGET = {
    method: 'GET',
    headers: {
        accept: 'application/ld+json',
        //Authorization : `Bearer ${token}` 			
    },
    cache: "default",
}


export const getAllFiltres = (req, res) => {
    let urlRequestTotal = url + `?pagination=false`;

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

export const getAllProduit = (listeProduit="", filtre="", page) => {

    let pageListe = page>0 ? page : 1

    let urlRequestTotal = url + "?pagination=true&page=" + pageListe

    if(listeProduit=="referencement"){
        urlRequestTotal += `&newProduit=1&referencer=0`
    }
    if(listeProduit=="modification"){
        urlRequestTotal += `&newListAttente=1`
    }    
    if(listeProduit=="export"){
        urlRequestTotal = url + `?pagination=false&referencer=1&export=null`
    }
    /**
     * filtre
     */
    if(filtre!=""){
        urlRequestTotal += filtre
    }
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

export const getProduit = (sku) => {
    let urlRequest = url + `?sku=${sku}`
    
    let result = fetch(urlRequest,headerGET)
    .then(function(res){ 
        return res.json() 
    })
    .then(function(value){ 
        return value; 
    })
    .catch(function(err){
    })

    return result;
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
    //console.log("urlPatch", urlPatch)

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
        ////console.log(err)
    });	

    return result;
}

