var board;
var d;
var m;
var timeElapsed;
var myTimer;
var happened;

function startGame() {
	myGameArea.start();
}

function cell(status, val) {
	this.status = status;
	this.val = val;
}
function coord(x, y) {
	this.x = x;
	this.y = y;
}

var myGameArea = {
	canvas : document.createElement("canvas"),
    start : function() {
  		var dim;
  		if(window.innerWidth > window.innerHeight)
  		{
  			dim = window.innerHeight - 50;
  		}
  		else if(window.innerWidth <= window.innerHeight)
  		{
  			dim = window.innerWidth - 50;
  		}
		if(dim > 600)
		{
			dim = 600;
		}
  		this.canvas.style.width  = dim.toString() + "px";
  		this.canvas.style.height = dim.toString() + "px";
  		this.canvas.width  = "600";
  		this.canvas.height = "600";
        this.canvas.style.opacity = "1";
    	this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[12]);
		this.interval = setInterval(updateGame, 20);	
		happened = false;
		d = Math.round(document.getElementById("qdim").value);
		if(d < 15)
		{
			d = 15;
		}
		else if(d > 35)
		{
			d = 35;
		}
		m = Math.round(document.getElementById("qmine").value);
		if(m < 1)
		{
			m = 1;
		}
		else if(m > (Math.pow(d, 2) - 1))
		{
			m = (Math.pow(d, 2) - 1);
		}
		board = new Array(d);
    	for (var i = 0; i < d; i++) { 
    		board[i] = []; 
		}
		for (var i = 0; i < d; i++) { 
    		for (var j = 0; j < d; j++) { 
				board[i][j] = new cell("hidden", 0); 
   			} 
		}
		timeElapsed = 0;
		document.getElementById("StopWatch").innerHTML = "Time: 0 sec";
		document.getElementById("StopWatch").style.color = "black";
		addMines();
		updateVal();

		this.canvas.oncontextmenu = () => false;
		this.canvas.addEventListener("mousedown", changeGrid);
    },
    clear : function() {
    	if (typeof this.context !== 'undefined')
    	{
        	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}

function countMines()
{
	var count = 0;
	var hold;
	for (var i = 0; i < d; i++) { 
		for (var j = 0; j < d; j++) { 
			hold = board[i][j];
			if(hold.val == -1)
			{
				count++;
			}
		} 
	}
	return count;
}

function addMines()
{
	while(countMines() != m)
	{
		var x = Math.floor(Math.random() * d);
		var y = Math.floor(Math.random() * d);
		board[x][y] = new cell("hidden", -1);
	}
}

function getNeighbors(row, col)
{
	var neigh = [];
	if (row > 0 && col > 0)
	{
		neigh.push(new coord(row - 1, col - 1));
	}
	if (row > 0)
	{
		neigh.push(new coord(row - 1, col));
	}
	if (row > 0 && col < (d - 1))
	{
		neigh.push(new coord(row - 1, col + 1));
	}
	if (col > 0)
	{
		neigh.push(new coord(row, col - 1));
	}
	if (col < (d - 1))
	{
		neigh.push(new coord(row, col + 1));
	}
	if (row < (d - 1) && col > 0)
	{
		neigh.push(new coord(row + 1, col - 1));
	}
	if (row < (d - 1))
	{
		neigh.push(new coord(row + 1, col));
	}
	if (row < (d - 1) && col < (d - 1))
	{
		neigh.push(new coord(row + 1, col + 1));
	}
	return neigh;
}

function updateVal()
{
	var hold;
	var touching = 0;
	for (var i = 0; i < d; i++) { 
		for (var j = 0; j < d; j++) {
			if((board[i][j]).val != -1)
			{
				hold = getNeighbors(i, j);
				for (var k = 0; k < hold.length; k++)
				{
					if((board[(hold[k]).x][(hold[k]).y]).val == -1)
					{
						touching++;
					}
				}
				board[i][j] = new cell("hidden", touching); 
				touching = 0;
			}
		} 
	}
}

function drawGame()
{
	grid();
	var space = 600 / d;
	ctx = myGameArea.context;
	for (var i = 0; i < d; i++) { 
		for (var j = 0; j < d; j++) {
			if((board[i][j]).status == "hidden")
			{
				ctx.fillStyle = "black";
				ctx.fillRect(space * i + 50 / d, space * j + 50 / d, space - 100 / d, space - 100 / d);
			}
			else if((board[i][j]).status == "flagged")
			{
				ctx.fillStyle = "red";
				ctx.fillRect(space * i + 50 / d, space * j + 50 / d, space - 100 / d, space - 100 / d);
			}
			else if((board[i][j]).status == "visible")
			{
				ctx.fillStyle = "white";
				ctx.fillRect(space * i + 50 / d, space * j + 50 / d, space - 100 / d, space - 100 / d);
				
				if((board[i][j]).val != 0 && (board[i][j]).val != -1)
				{
					ctx.font = (-0.4*d+30).toString() + "px Times New Roman";
        			ctx.fillStyle = "black";
					ctx.fillText((board[i][j]).val, space * i + space / (d*0.05+2), space * j + space / (-0.02*d+1.8));
				}
				else if((board[i][j]).val == -1)
				{
					ctx.beginPath();
					ctx.arc(space * i + space / 2, space * j + space / 2, space / 2.75 , 0, 2 * Math.PI);
					ctx.stroke();
					ctx.fillStyle = "orange";
					ctx.fill();
				}
			}
		} 
	}
}

function grid()
{	
	if (typeof myGameArea.context !== 'undefined')
	{
		ctx = myGameArea.context;
		ctx.fillStyle = "white";
		var space = 600 / d;
		for (var i = 0; i < (d - 1); i++)
		{
			ctx.fillRect(0, space + i * space, 600, 1);
			ctx.fillRect(space + i * space, 0, 1, 600);
		}
    }
}

function flood(x, y)
{
	var holder = getNeighbors(x, y);
	for (var i = 0; i < holder.length; i++)
	{
		var stat = (board[(holder[i]).x][(holder[i]).y]).status;
		var num = (board[(holder[i]).x][(holder[i]).y]).val;
		if(stat != "visible")
		{
			board[(holder[i]).x][(holder[i]).y] = new cell("visible", num);
			if(num == 0)
			{
				flood((holder[i]).x, (holder[i]).y);
			}
		}
	}
}

function reset()
{
	myGameArea.canvas.removeEventListener("mousedown", changeGrid); 
	clearInterval(myGameArea.interval); 
	resetTime(); 
	startGame();
}

function resetTime()
{
	clearInterval(myTimer);
	timeElapsed = 0;
}

function changeGrid(event) { 
	if(!happened)
	{
		myTimer = setInterval(tick, 1000);
		happened = true;
	}
	let rect = myGameArea.canvas.getBoundingClientRect(); 
	let x = event.clientX - rect.left; 
	let y = event.clientY - rect.top; 
	let side = event.button; //0 if left, 2 if right
	var space = 600 / d;
	var i = Math.floor(x / space);
	var j = Math.floor(y / space);

	if((board[i][j]).status == "hidden" && side == 0)
	{
		board[i][j] = new cell("visible", (board[i][j]).val);
		if((board[i][j]).val == 0)
		{
			flood(i, j);
		}
	}
	else if((board[i][j]).status == "hidden" && side == 2)
	{
		board[i][j] = new cell("flagged", (board[i][j]).val);
	}
	else if((board[i][j]).status == "flagged" && side == 2)
	{
		board[i][j] = new cell("hidden", (board[i][j]).val);
	}
}

function checkLose()
{
	var hold;
	for (var i = 0; i < d; i++) { 
		for (var j = 0; j < d; j++) { 
			hold = board[i][j];
			if(hold.val == -1 && hold.status == "visible")
			{
				return true;
			}
		} 
	}
	return false;
}

function checkFlagged()
{
	var count = 0;
	var hold;
	var returned = true;
	for (var i = 0; i < d; i++) { 
		for (var j = 0; j < d; j++) { 
			hold = board[i][j];
			if(hold.status == "flagged")
			{
				count++;
				if(hold.val != -1)
				{
					returned = false;
				}
			}
		} 
	}
	document.getElementById("Uflags").innerHTML = "Used Flags: " + count.toString();
	if(count == m)
	{
		return returned;
	}
	else{
		return false;
	}
}

function checkVisible()
{
	var count = 0;
	var hold;
	for (var i = 0; i < d; i++) { 
		for (var j = 0; j < d; j++) { 
			hold = board[i][j];
			if(hold.status == "visible")
			{
				count++;
			}
		} 
	}
	if(count == Math.pow(d, 2) - m)
	{
		return true;
	}
	else{
		return false;
	}
}

function tick(){
    timeElapsed = timeElapsed + 1;
    document.getElementById("StopWatch").innerHTML = "Time: " + timeElapsed.toString() + " sec";
}

function lose()
{
	clearInterval(myTimer);
	document.getElementById("StopWatch").style.color = "red";
	clearInterval(myGameArea.interval);
}

function win()
{
	clearInterval(myTimer);
	document.getElementById("StopWatch").style.color = "green";
	clearInterval(myGameArea.interval);
}

function updateGame()
{
	myGameArea.clear();
	drawGame();
	if(checkLose())
	{
		lose();
	}
	else if(checkFlagged() || checkVisible())
	{
		win();
	}
}