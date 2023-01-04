let url = "http://212.129.3.31:8080/api/taches"
// let url = "http://localhost:8001/api/taches"
const headerGET = {
    method: 'GET',
    headers: {
        accept: 'application/ld+json',
        //Authorization : `Bearer ${token}` 			
    },
    cache: "default",
}


export const getTacheJournalier = (jour) => {
    let urlRequestTotal = url + "?date_modif" + jour
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