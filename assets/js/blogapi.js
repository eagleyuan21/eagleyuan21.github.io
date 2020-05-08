var url = "https://blogpostseha.herokuapp.com/?format=json";
var testurl = "https://ipinfo.io/json";
var xhr = new XMLHttpRequest();

function getObjects()
{
	xhr.open('GET', url, true);
	xhr.send();
	
	xhr.onreadystatechange = processRequest;
	
}

function processRequest(e) {
    var i;
    if (xhr.readyState == 4 && xhr.status == 200) 
    {
        var response = JSON.parse(xhr.responseText);
        for(i = 0; i < response.length; i++)
        {
        	console.log(response[i].Title);
        }
    }
}