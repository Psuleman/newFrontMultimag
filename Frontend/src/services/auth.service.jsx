// let url = "http://212.129.3.31:8080/api"
let url = "http://localhost:8001/api"



export const login = (donnesJson) => {
    let urlLogin = url + "/login"
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        accept: 'application/json'
        },
        body: JSON.stringify(donnesJson)
    };

    let result = fetch(urlLogin, requestOptions)
    .then(response => { 
        return response.json()
    })
    .catch(err=>{
        //console.log(err)
    });   
    return result;
}

