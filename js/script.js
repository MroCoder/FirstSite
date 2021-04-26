var element = document.getElementById('input');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const param = urlParams.get('param');

element.innerText = param