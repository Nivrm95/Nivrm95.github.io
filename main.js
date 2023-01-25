

//onClick
document.getElementById("searchButton").addEventListener("click", countryByInput);

//get data
function countryByInput(event){
    event.preventDefault()
    const valueIp = document.getElementById("searchBox").value;
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_nVSFhwwElgg8qB2p8rvhZyKssloV4&ipAddress=${valueIp}`)
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
initMap(dataObj);


};


//ifram
// document.getElementById("continerMap").innerHTML= `<iframe src="https://maps.google.com/maps?q=${dataObj.location.lat},${dataObj.location.lng}&hl=es;z=14&amp;output=embed" title="my maps" id="map"></iframe>`


//get map//
let map;
function initMap(dataObj) {
    let lat=  32.109333 ;
    let lng= 34.855499 ;
    if (dataObj){
        lat = dataObj.location.lat;
        lng = dataObj.location.lng;
    }
    map = new google.maps.Map(document.getElementById("continerMap"), {
        center: {lat ,lng },
        zoom: 12,
    });
    
    // Create markers.
    const marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat,lng),
        map: map, 
        icon: ('./images/icon-location.svg'),
    });
};
window.initMap = initMap;





