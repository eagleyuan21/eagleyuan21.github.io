var imgs = [
"IMG_0000-min.JPG", "IMG_0006.JPG", "IMG_0013-min.JPG", "IMG_0072.JPG", "IMG_0080.JPG",
"IMG_0098-min.JPG", "IMG_0122-min.JPG", "IMG_0438.jpg", "IMG_1017.jpg", "IMG_1053.JPEG",
"IMG_1232.JPG", "IMG_1324.jpg", "IMG_2641.JPG", "IMG_2897-min.JPG", "IMG_2934.jpg",
"IMG_3387.JPG", "IMG_3707.JPG", "IMG_3869.JPG", "IMG_3919.JPG", "IMG_3923.jpg",
"IMG_3981.jpg", "IMG_3982.JPG", "IMG_4060.jpg", "IMG_4061.jpg", "IMG_4102.JPG",
"IMG_4109.jpg", "IMG_4118.jpg", "IMG_4127.jpg", "IMG_4141.jpg", "IMG_4142.jpg",
"IMG_4152.jpg", "IMG_4155.JPG", "IMG_4181.jpg", "IMG_4184.jpg", "IMG_4186.jpg",
"IMG_4187.jpg", "IMG_4188.jpg", "IMG_4245.JPG", "IMG_4292.JPG", "IMG_4408.jpg",
"IMG_4419.JPG", "IMG_4442.jpg", "IMG_4472.jpg", "IMG_4649.jpg", "IMG_4795.jpg",
"IMG_4930.jpg", "IMG_5054.JPG", "IMG_5137.jpg", "IMG_5261.JPG", "IMG_5301.JPG",
"IMG_5305.JPG", "IMG_5347.JPG", "IMG_5355.JPG", "IMG_5560.JPG", "IMG_5651.jpeg",
"IMG_5842.jpg", "IMG_6040-min.JPG", "IMG_6197.JPEG", "IMG_6209.jpg", "IMG_6224.JPG",
"IMG_6254-min.jpg", "IMG_6274.jpg", "IMG_6346.JPG", "IMG_6395.jpg", "IMG_6462.jpg",
"IMG_6563.jpg", "IMG_6568.JPG", "IMG_6573.jpg", "IMG_6670.JPG", "IMG_6926-min.jpg",
"IMG_6972-min.JPEG", "IMG_7357-min.JPG", "IMG_7404-min.jpg", "IMG_7450.JPG",
"IMG_7489-min.JPEG", "IMG_7909.jpg", "IMG_8255.jpg"
];

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
	var val1 = window.outerWidth/50 * 29;
	var ret = val1.toString();
	var val2 = window.outerWidth/10 + 20;
	var ter = val2.toString();
	holder.style.height = ret + "px";
	holder.style.paddingTop = ter + "px";
	
	var ua = navigator.userAgent.toLowerCase(); 
  	if (ua.indexOf('safari') != -1) { 
  		if (ua.indexOf('chrome') > -1) {
    		//chrome
  		} else {
    		if(window.outerHeight <= 450 || window.outerWidth >= 1366)
    		{
    			holder.style.backgroundAttachment = "scroll";
    		}
    		else{
    			holder.style.backgroundAttachment = "fixed";
    		}
  		}
  	}
	
	if(window.outerWidth > 1000 || window.outerHeight < 450){
		holder.style.backgroundSize = "cover";
	}
	else{
		holder.style.backgroundSize = "contain";
	}
	
	var device = navigator.userAgent,
	browser = {
    	iPad: /iPad/.test(device),
    	iPhone: /iPhone/.test(device),
    	Android4: /Android 4/.test(device)
	};
	if(browser.iPad) 
	{
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
    	imgStr = '<div class="' + name + ' fade" style="display:none"><img src="' + path + img + '" style="max-height:420px; max-width:100%"></img></div>';
    	fullstring = fullstring.concat(imgStr);
    }
    
    document.open();
    document.write(fullstring); 
    document.close();
}

var rand1 = 0;
var rand2 = 0;
var rand3 = 0;
var timerand1 = 0;
var timerand2 = 0;
var timerand3 = 0;

function showSlides1(val) {

  var slides1 = document.getElementsByClassName("left");
  
  slides1[val].style.display = "none";
  
  rand1 = Math.floor(Math.random()*slides1.length);  
  slides1[rand1].style.display = "block";
  timerand1 = Math.floor(Math.random() * 3000) + 6000;
  setTimeout(showSlides1.bind(null, rand1), timerand1);
}

function showSlides2(val) {

  var slides2 = document.getElementsByClassName("mid");

  slides2[val].style.display = "none";  
  
  rand2 = Math.floor(Math.random()*slides2.length);
  slides2[rand2].style.display = "block";  
  timerand2 = Math.floor(Math.random() * 3000) + 6000;
  setTimeout(showSlides2.bind(null, rand2), timerand2);
}

function showSlides3(val) {

  var slides3 = document.getElementsByClassName("right");

  slides3[val].style.display = "none"; 

  rand3 = Math.floor(Math.random()*slides3.length);
  slides3[rand3].style.display = "block";  
  timerand3 = Math.floor(Math.random() * 3000) + 6000;
  setTimeout(showSlides3.bind(null, rand3), timerand3);
}