var url = "https://blogpostseha.herokuapp.com/?format=json";
var xhr = new XMLHttpRequest();

function getObjects()
{
	xhr.onreadystatechange = function() {
  		if (this.readyState == 4 && this.status == 200) {
    		var myArr = JSON.parse(this.responseText);
    		myFunction(myArr);
  		}
	};
	xhr.open("GET", url, true);
	xhr.send();
	
}

function myFunction(arr) {
  var out = "";
  var i;
  var img;

  for(i = 0; i < arr.length; i++) {
  	if(arr[i].Image == null)
  	{
  		img = '';
  	}
  	else{
  		img = '<h1 class="bio-head"><img src="' + arr[i].Image + '" style="max-height:350px;max-width:500px;height:auto;width:auto"></h1><br>';
  	}
    out += '<h1 class="bio-head" style="font-size:31px;">' + arr[i].Title + '</h1><h2 class="bio-head" style="font-size:18px;text-align:left">' + arr[i].Date + '</h2><br>' + 
    img + '<p style="font-size:16px;text-align:left;white-space:pre-wrap">' + arr[i].Content + '</p><br><br><br><br><br><br>';
  }
  document.getElementById("id01").innerHTML = out;
}