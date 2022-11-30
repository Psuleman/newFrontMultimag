let url = "http://212.129.3.31:8080/api/users"
// let url = "http://localhost:8001/api/users"


const headerGET = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        //Authorization : `Bearer ${token}` 			
    },
    cache: "default",
}

export const getUser = (email) => {
    let urlRequest = url + `?email=${email}`
    
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