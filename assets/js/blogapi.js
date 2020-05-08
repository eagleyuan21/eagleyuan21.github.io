var url = "https://blogpostseha.herokuapp.com/?format=json";
var testurl = "https://ipinfo.io/json";
var xhr = new XMLHttpRequest();

function getObjects()
{
	xhr.open('GET', url, true);
	xhr.send();
	
	xhr.onreadystatechange = processRequest;
	
	xhr.addEventListener("readystatechange", processRequest, false);
}

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) 
    {
        var response = JSON.parse(xhr.responseText);
        console.log(response[0].photo_url);
    }
}