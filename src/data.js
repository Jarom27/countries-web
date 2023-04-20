const URL = "https://restcountries.com/v3.1/all"

async function getCountries(){
    let response = await fetch(URL);
    let countries_json  = await response.json();
    console.log(countries_json)
    return [countries_json];
}

