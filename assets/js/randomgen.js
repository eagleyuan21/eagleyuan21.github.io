var imgs = ['IMG_0006.JPG', 'IMG_0032.JPG', 'IMG_0055.JPG', 'IMG_0072.JPG', 'IMG_0080.JPG', 'IMG_0103.JPG', 'IMG_1232.JPG', 
'IMG_1911.JPG', 'IMG_2454.jpg', 'IMG_2537.JPG', 'IMG_2554.JPEG', 'IMG_2555.JPG', 'IMG_2556.JPG', 'IMG_2641.JPG', 'IMG_2702.PNG', 
'IMG_2801.jpg', 'IMG_2871.JPG', 'IMG_2893.PNG', 'IMG_2934.jpg', 'IMG_2935.jpg', 'IMG_2972.PNG', 'IMG_3085.JPG', 'IMG_3129.JPG', 
'IMG_3147.JPG', 'IMG_3262.JPG', 'IMG_3266.PNG', 'IMG_3299.JPG', 'IMG_3302.JPG', 'IMG_3305.JPG', 'IMG_3306.JPG', 'IMG_3309.JPG', 
'IMG_3320.jpg', 'IMG_3387.JPG', 'IMG_3518.JPG', 'IMG_3570.jpg', 'IMG_3587.JPG', 'IMG_3589.JPG', 'IMG_3687.JPG', 'IMG_3690.JPG', 
'IMG_3707.JPG', 'IMG_3727.JPG', 'IMG_3869.JPG', 'IMG_3923.jpg', 'IMG_3971.jpg', 'IMG_3979.JPG', 'IMG_3982.JPG', 'IMG_4060.jpg', 
'IMG_4069.JPEG', 'IMG_4095.jpg', 'IMG_4102.JPG', 'IMG_4106.JPG', 'IMG_4118.jpg', 'IMG_4123.JPG', 'IMG_4127.jpg', 'IMG_4141.jpg', 
'IMG_4142.jpg', 'IMG_4152.jpg', 'IMG_4155.JPG', 'IMG_4174.JPG', 'IMG_4181.jpg', 'IMG_4184.jpg', 'IMG_4185.jpg', 'IMG_4186.jpg', 
'IMG_4187.jpg', 'IMG_4188.jpg', 'IMG_4245.JPG', 'IMG_4408.jpg', 'IMG_4442.jpg', 'IMG_4472.jpg', 'IMG_4527.JPG', 'IMG_4625.JPG', 
'IMG_4649.jpg', 'IMG_4658.jpg', 'IMG_4795.jpg', 'IMG_4930.jpg', 'IMG_4979.JPG', 'IMG_5053.PNG', 'IMG_5054.JPG', 'IMG_5132.jpg', 
'IMG_5137.jpg', 'IMG_5141.jpg', 'IMG_5261.JPG', 'IMG_5301.JPG', 'IMG_5305.JPG', 'IMG_5344.PNG', 'IMG_5347.JPG', 'IMG_5355.JPG', 
'IMG_6846.JPG', 'IMG_8255.jpg'];

var path = "assets/files/slideshow/";

function getRandomImage(name) {
    var i;
    var img;
    var imgStr;
    var fullstring = "";
    for (i = 0; i < imgs.length; i++)
    {
    	img = imgs[i];
    	imgStr = '<div class="' + name + ' fade"><img src="' + path + img + '" width="100%"></img></div>';
    	fullstring = fullstring.concat(imgStr);
    }
    
    document.open();
    document.write(fullstring); 
    document.close();
}

var rand = 0;
function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("left");
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";  
  }
  rand = Math.floor(Math.random()*imgs.length);  
  console.log(rand)
  slides[rand].style.display = "block";  
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mid");
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";  
  }
  rand = Math.floor(Math.random()*imgs.length);
  console.log(rand)  
  slides[rand].style.display = "block";  
  setTimeout(showSlides2, 2000); // Change image every 2 seconds
}

function showSlides3() {
  var i;
  var slides = document.getElementsByClassName("right");
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";  
  }
  rand = Math.floor(Math.random()*imgs.length);
  console.log(rand)  
  slides[rand].style.display = "block";  
  setTimeout(showSlides3, 2000); // Change image every 2 seconds
}