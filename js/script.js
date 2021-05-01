var element = document.getElementById('input');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const sPat = urlParams.get('PAT');
const iSrv = urlParams.get('srv');
const iId = urlParams.get('id');

var buttonOn = document.getElementById("HueOn")
var buttonOff = document.getElementById("HueOff")

buttonOn.addEventListener('click', XHueOn);
buttonOff.addEventListener('click', XHueOff);

function XHueOn() {

    const Http = new XMLHttpRequest();
    const Hueurl = 'http://' + iSrv.substring(0,3) + '.' + iSrv.substring(3,6) + '.' + iSrv.substring(6,7) + '.' + iSrv.substring(7,8)  + '/api/' + sPat + '/lights/' + iId + '/state'

    Http.open("PUT", Hueurl);
    Http.setRequestHeader("Content-Type", "application/json");

    var dataOn = JSON.stringify({"on":true});

    Http.send(dataOn);

}

function XHueOff() {

    const Http = new XMLHttpRequest();
    const Hueurl = 'http://' + iSrv.substring(0,3) + '.' + iSrv.substring(3,6) + '.' + iSrv.substring(6,7) + '.' + iSrv.substring(7,8) + '/api/' + sPat + '/lights/' + iId + '/state'

    Http.open("PUT", Hueurl);
    Http.setRequestHeader("Content-Type", "application/json");

    var dataOff = JSON.stringify({"on":false});

    Http.send(dataOff);

}

//const url='https://jsonplaceholder.typicode.com/posts';
//Http.open("GET", url);

//Http.send();

//Get return from 
// Http.onreadystatechange = (e) => {
//     element.innerText = Http.responseText
// }

element.innerText = sPat + ' - ' + iSrv + ' - ' + iId + ' - ' + iSrv.substring(0,3) + '.' + iSrv.substring(3,6) + '.' + iSrv.substring(6,7) + '.' + iSrv.substring(7,8)
