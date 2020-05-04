var files = ['IMG_0006.JPG', 'IMG_0032.JPG', 'IMG_0055.JPG', 'IMG_0072.JPG', 'IMG_0080.JPG', 'IMG_0103.JPG', 'IMG_1012.jpg', 'IMG_1147.JPG', 
'IMG_1169.JPG', 'IMG_1208.PNG', 'IMG_1232.JPG', 'IMG_1319.JPG', 'IMG_1391.JPG', 'IMG_1911.JPG', 'IMG_2261.JPG', 'IMG_2454.jpg', 'IMG_2462.PNG', 
'IMG_2537.JPG', 'IMG_2554.JPEG', 'IMG_2555.JPG', 'IMG_2556.JPG', 'IMG_2641.JPG', 'IMG_2702.PNG', 'IMG_2801.jpg', 'IMG_2871.JPG', 'IMG_2893.PNG', 
'IMG_2906.JPG', 'IMG_2914.JPG', 'IMG_2934.jpg', 'IMG_2935.jpg', 'IMG_2972.PNG', 'IMG_3069.JPG', 'IMG_3072.JPG', 'IMG_3085.JPG', 'IMG_3129.JPG', 
'IMG_3147.JPG', 'IMG_3262.JPG', 'IMG_3266.PNG', 'IMG_3299.JPG', 'IMG_3302.JPG', 'IMG_3305.JPG', 'IMG_3306.JPG', 'IMG_3309.JPG', 'IMG_3320.jpg', 
'IMG_3387.JPG', 'IMG_3417.JPG', 'IMG_3444.JPG', 'IMG_3457.JPG', 'IMG_3518.JPG', 'IMG_3570.jpg', 'IMG_3587.JPG', 'IMG_3589.JPG', 'IMG_3687.JPG', 
'IMG_3690.JPG', 'IMG_3707.JPG', 'IMG_3708.JPG', 'IMG_3727.JPG', 'IMG_3869.JPG', 'IMG_3919.JPG', 'IMG_3923.jpg', 'IMG_3971.jpg', 'IMG_3979.JPG', 
'IMG_3981.jpg', 'IMG_3982.JPG', 'IMG_4060.jpg', 'IMG_4069.JPEG', 'IMG_4095.jpg', 'IMG_4102.JPG', 'IMG_4106.JPG', 'IMG_4109.jpg', 'IMG_4118.jpg', 
'IMG_4123.JPG', 'IMG_4127.jpg', 'IMG_4141.jpg', 'IMG_4142.jpg', 'IMG_4152.jpg', 'IMG_4155.JPG', 'IMG_4174.JPG', 'IMG_4181.jpg', 'IMG_4184.jpg', 
'IMG_4185.jpg', 'IMG_4186.jpg', 'IMG_4187.jpg', 'IMG_4188.jpg', 'IMG_4245.JPG', 'IMG_4341.jpg', 'IMG_4363.jpg', 'IMG_4408.jpg', 'IMG_4419.JPG', 
'IMG_4421.JPG', 'IMG_4442.jpg', 'IMG_4472.jpg', 'IMG_4527.JPG', 'IMG_4625.JPG', 'IMG_4649.jpg', 'IMG_4658.jpg', 'IMG_4795.jpg', 
'IMG_4930.jpg', 'IMG_4979.JPG', 'IMG_5053.PNG', 'IMG_5054.JPG', 'IMG_5132.jpg', 'IMG_5137.jpg', 'IMG_5141.jpg', 'IMG_5261.JPG', 'IMG_5301.JPG', 
'IMG_5305.JPG', 'IMG_5347.JPG', 'IMG_5355.JPG', 'IMG_5476.jpg', 'IMG_5560.JPG', 'IMG_6846.JPG', 'IMG_7450.JPG', 'IMG_8255.jpg'];

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) 
    {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

var imgs = shuffle(files);

var path = "assets/files/slideshow/";

var min = Math.floor(imgs.length / 3);
var dif = imgs.length - 3 * min;
var mark1 = 0;
var mark2 = 0;
if (dif == 0){
	mark1 = min;
	mark2 = mark1 + min;
} else if (dif == 1){
	mark1 = min + 1;
	mark2 = mark1 + min;
} else if (dif == 2){
	mark1 = min + 1;
	mark2 = mark1 + min + 1;
} else{
	mark1 = min;
	mark2 = mark1 + min;
}

function changebackground(){
	var holder = document.getElementById("about me");
	var val1 = window.outerWidth/3 * 2 - 30;
	var ret = val1.toString();
	var val2 = window.outerWidth/10 + 20;
	var ter = val2.toString();
	holder.style.height = ret + "px";
	holder.style.paddingTop = ter + "px";
	if(window.outerWidth > 1080){
		holder.style.backgroundSize = "cover";
	}
	else{
		holder.style.backgroundSize = "contain";
	}
	setTimeout(changebackground,420);
}

function getRandomImage(name, num) {
    var i;
    var img;
    var imgStr;
    var beg;
    var end;
    var fullstring = "";
    if(num == 1)
    {
    	beg = 0;
    	end = mark1;
    }
    else if(num == 2)
    {
    	beg = mark1;
    	end = mark2;
    }
    else if(num ==3)
    {
    	beg = mark2;
    	end = imgs.length;
    }
    for (i = beg; i < end; i++)
    {
    	img = imgs[i];
    	imgStr = '<div class="' + name + ' fade"><img src="' + path + img + '" style="max-height:420px; max-width:100%;"></img></div>';
    	fullstring = fullstring.concat(imgStr);
    }
    
    document.open();
    document.write(fullstring); 
    document.close();
}

var rand = 0;
var timerand = 0;

function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("left");
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }
  rand = Math.floor(Math.random()*slides.length);  
  slides[rand].style.display = "block";
  timerand = Math.floor(Math.random() * 2700) + 4000;
  setTimeout(showSlides1, timerand);
}

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mid");
  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";  
  }
  rand = Math.floor(Math.random()*slides.length);
  slides[rand].style.display = "block";  
  timerand = Math.floor(Math.random() * 2700) + 4000;
  setTimeout(showSlides2, timerand);
}

function showSlides3() {
  var i;
  var slides = document.getElementsByClassName("right");
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none"; 
  }
  rand = Math.floor(Math.random()*slides.length);
  slides[rand].style.display = "block";  
  timerand = Math.floor(Math.random() * 2700) + 4000;
  setTimeout(showSlides3, timerand);
}