let url = "http://212.129.3.31:8080/api/categorie_refs"

const headerGET = {
    method: 'GET',
    headers: {
        accept: 'application/ld+json',
        //Authorization : `Bearer ${token}` 			
    },
    cache: "default",
}


export const getCategories = () => {
    let tab = fetch(url, headerGET)
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