//let url = "http://212.129.3.31:8080/api/matiere_produits"
let url = "http://localhost:8001/api/matiere_produits"

export const setMatiereProduit = (data, operation) => {
    const requestOptions = {
        method: `${operation}`,
        headers: { 
        'Content-Type': 'application/json',
        accept: 'application/json',
        //Authorization : `Bearer ${token}`
        },
        body: JSON.stringify(data)
    };
    let urlRequest = operation == "POST" ? url : `url/${data.id}`
    //fetch('http://212.129.3.31:8080/api/produits', requestOptions)
    let result = fetch(urlRequest, requestOptions)
    .then(response => {
        return response
    })
    //.then(data => return data)
    .catch(err=>{
        //console.log(err)
    });	

    return result;
}
