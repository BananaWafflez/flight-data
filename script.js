
//require('dotenv').config();
const apiToken = "31b5587f2d0365a4c74faf808f14582b1c8a6248e61a945b99ce14b759fbdac9fce822ce20fb5cdeebbcde817d85f80c";
var jsonstring;
var aircode = "";
const submitbutton = document.getElementById('submit');
const aircodebox = document.getElementById("airport");
async function foo(){
    await fetch('https://airportdb.io/api/v1/airport/K' + aircode + '?apiToken=' + apiToken)
    .then(response=>{
        if(response.ok){
            
            return response.json();
        }else{
            throw new Error('API Request failed');
        }
    })
    .then(data=>{
        jsonstring = data;
        const para = document.createElement("p");
        const node = document.createTextNode(data.name);
        para.appendChild(node);
        const element = document.getElementById("div1");
        element.appendChild(para);
        
        
    })
    .then(()=>{
        console.log(jsonstring);
    })
    .catch(error=>{
        console.log(error);
    })
    

} 

function getAirCode(){
    
    console.log(aircodebox.value);
    aircode = aircodebox.value;
    foo();

}
submitbutton.addEventListener('click', getAirCode);






    