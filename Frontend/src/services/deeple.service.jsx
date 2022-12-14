const url = "https://api.deepl.com/v2/translate"


export const getTranslate = (text) => {
    let data = {
        text: [text],
        target_lang: "EN"
    }

    const requestPOST= {
        method: 'POST',
        headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
        Authorization : `DeepL-Auth-Key 85feb087-efb6-fec2-bd2b-e4f2309944c5`
        },
        body: JSON.stringify(data)
    };

    let result = fetch(url, requestPOST)
    .then(response => {
        return response
    })
    //.then(data => return data)
    .catch(err=>{
        ////console.log(err)
    });	

    return result;
    
}