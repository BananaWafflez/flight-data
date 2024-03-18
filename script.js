const apiToken = "31b5587f2d0365a4c74faf808f14582b1c8a6248e61a945b99ce14b759fbdac9fce822ce20fb5cdeebbcde817d85f80c";
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

    