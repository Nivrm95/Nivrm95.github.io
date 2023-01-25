
// user clicks the button
// a function is called
// data is being fetched
// info box is updated
// map is updated




//onClick
document.getElementById("searchButton").addEventListener("click", countryByInput);

//get data
function countryByInput(event){
    event.preventDefault()
    const valueIp = document.getElementById("searchBox").value;
    fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_IqaOVPyAnIrIZCpFR8UP3mLPojM8w&ipAddress=${valueIp}`)
    .then(response => response.json())
    .then(data_api => countryData(data_api))
    .catch(error => console.error(error));
}; 

//get to html
function countryData (dataObj){
document.getElementById("ipInfo").innerHTML = dataObj.ip;
const postCodeIs = dataObj.location.postalCode === '' ? "No Exists" : dataObj.location.postalCode ;
document.getElementById("locationInfo").innerHTML = 
`<div id=locationInfo>
    <span class="country">${dataObj.location.country},</span>
    <span class="cisy">${dataObj.location.city} </span>
    <div calss="postalCode">${postCodeIs}</div>
</div>`
document.getElementById("timezoneInfo").innerHTML = dataObj.location.timezone;
document.getElementById("ispInfo").innerHTML = dataObj.isp;
console.log(document.getElementById("map"));
//get map//
document.getElementById("continerMap").innerHTML= `<iframe src="https://maps.google.com/maps?q=${dataObj.location.lat},${dataObj.location.lng}&hl=es;z=14&amp;output=embed" title="my maps" id="map"></iframe>`
// document.getElementById("continerMap").innerHTML= to function
};




