
require('dotenv').config();
const apiToken = process.env.API_KEY;
var jsonstring;

async function foo(){
    await fetch('https://airportdb.io/api/v1/airport/KTPA?apiToken=' + apiToken)
    .then(response=>{
        if(response.ok){
            
            return response.json();
        }else{
            throw new Error('API Request failed');
        }
    })
    .then(data=>{
        jsonstring = data;
        setData(data);
    })
    .then(()=>{
        console.log(jsonstring);
    })
    .catch(error=>{
        console.log(error);
    })
    

} 
function setData(data){
    jsonstring = data;
}
foo();




    