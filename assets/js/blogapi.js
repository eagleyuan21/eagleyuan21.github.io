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
  var val1 = window.outerWidth/4 * 3;
  var width = val1.toString();
  var endbreak;
  for(i = 0; i < arr.length; i++) {
  	if(i == (arr.length - 1))
  	{
  		endbreak = '</p><br>';
  	}
  	else{
  		endbreak = '</p><br><br><br><br><br><br><br><br><br>';
  	}
  	
  	
  	if(arr[i].Image == null)
  	{
  		img = '';
  	}
  	else{
  		img = '<h1 class="bio-head"><img src="' + arr[i].Image + '" style="max-height:350px;max-width:500px;height:auto;width:' + width + 'px"></h1>';
  	}
  	newDate = format(arr[i].Date);
    out += '<h1 class="bio-head" style="font-size:31px;font-weight:bold;text-align:left">' + arr[i].Title + '</h1><h2 class="bio-head" style="font-size:18px;text-align:left">' + newDate + '</h2>' + 
    img + '<p class="bio-head" style="font-size:18px;text-align:left;white-space:pre-wrap">' + arr[i].Content + endbreak;
  }
  document.getElementById("id01").innerHTML = out;
}

function format(inputDate){ 
    var splitDate = inputDate.split('-');
    if(splitDate.count == 0){
        return null;
    }

    var year = splitDate[0];
    var month = splitDate[1];
    var day = splitDate[2]; 

    return month + '\\' + day + '\\' + year;
}