function FileHelper(pathOfFileToReadFrom)
{
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);        
    var returnValue = request.responseText;
    return returnValue;
}

var text = FileHelper( "../files/slideshow/names.txt" );
var imgs = text.split("\n");

function getRandomImage(path) {
    var i;
    var img;
    var imgStr;
    var fullstring = "";
    for (i = 0; i < imgs.length; i++)
    {
    	img = imgs[i];
    	imgStr = '<div class="slides fade"><img src="' + path + img + '" alt = "" width="25%" height="75%"></img></div>';
    	fullstring = fullstring.concat(imgStr);
    }
    
    document.open();
    document.write(fullstring); 
    document.close();
}

var rand = 0;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";  
  }
  rand = Math.floor(Math.random()*imgs.length);  
  slides[rand].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}