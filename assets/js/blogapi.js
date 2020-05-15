var url = "https://blogpostseha.herokuapp.com/?format=json";
var xhr = new XMLHttpRequest();


function getObjects()
{
	xhr.onreadystatechange = function() {
  		if (this.readyState == 4 && this.status == 200) {
    		var myArr = JSON.parse(this.responseText);
    		myFunction(myArr);
    		
    		var coll = document.getElementsByClassName("collapsible");
			var i;

			for (i = 0; i < coll.length; i++) {
  				coll[i].addEventListener("click", function() {
    				this.classList.toggle("active");
    				var content = this.nextElementSibling;
    				if (content.style.maxHeight){
      					content.style.maxHeight = null;
    				} else {
      					content.style.maxHeight = content.scrollHeight + "px";
    				} 
  				});
			}
  		}
	};
	
	xhr.open("GET", url, true);
	xhr.send();
}

function resizeBack()
{
  	var ua = navigator.userAgent.toLowerCase(); 
  	if (ua.indexOf('safari') != -1) { 
  		if (ua.indexOf('chrome') > -1) {
    		//chrome
  		} else {
    		if(window.outerWidth <= 415)
    		{
    			document.getElementById("intro").style.backgroundAttachment = "scroll";
    		}
  		}
  	}
}

function myFunction(arr) {
  var out = "";
  var i;
  var img;
  var val1 = window.outerWidth/4 * 3;
  var width = val1.toString();
  var endbreak = '</p></div><br>';
  
  idSort = function (a,b) {
    return a.id - b.id;
  };
  arr.sort(idSort);
  
  for(i = arr.length - 1; i >= 0; i--) {

  	if(arr[i].Image.length > 0)
  	{
  		img = '<h1 style="text-align:center"><img src="' + arr[i].Image + '" style="max-height:500px;max-width:500px;height:auto;width:' + width + 'px"></h1>';
  	}
  	else{
  		img = '';
  	}
  	newDate = format(arr[i].Date);
    out += '<button type="button" class="collapsible"><h1 style="font-size:31px;font-weight:500;text-align:left">' + arr[i].Title + '</h1><h2 style="font-size:18px;text-align:left">' + newDate + '</h2></button><div class="content">' + 
    img + '<p style="font-size:18px;text-align:left;white-space:pre-wrap">' + arr[i].Content + endbreak;
  }
  document.getElementById("blogspostsdisplay").innerHTML = out;
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
