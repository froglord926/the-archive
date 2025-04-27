
//var socket = io.connect('http://73.153.212.80:5000/'); //connect to the server so you can send back info
var socket = io.connect('http://localhost:5000/'); //connect to the server so you can send back info
//var socket = io.connect('http://10.0.35.128:5000/');
const LOCALSTORAGEIDNAME = "idv"
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var pics = {

}
canvas.width=500;
canvas.height=500;
var keysDown = [false,false,false,false];
var offset = [0,0]

drawBar = function(x,y,w,h,color,what){
ctx.fillStyle = "#999999"
ctx.fillRect(x,y,w,h)
ctx.fillStyle = "#B5B5B5"
ctx.fillRect(x+5,y+5,w-10,h-10)
ctx.fillStyle = color;
ctx.fillRect(x+5,y+5,(w-10)/100*what,h-10)
}
socket.on('connect', function(data) { //when you connect
  socket.emit('new player'); //test the send back
});

//checks if the player has account
if (localStorage.getItem(LOCALSTORAGEIDNAME) == null) {
	getPlayer();
} else {
  socket.emit("sendID", localStorage.getItem(LOCALSTORAGEIDNAME));
  playerID = localStorage.getItem(LOCALSTORAGEIDNAME);
}


socket.on("update", function(players,baddies) {
var bck = new Image();
bck.src = "static/resources/background.png";
	

for(var i=Math.floor((offset[0]-250)/1024);i<=Math.ceil((offset[0]+250)/1024);i++){
for(var o=Math.floor((offset[1]-250)/768);o<=Math.ceil((offset[1]+250)/768);o++){
ctx.drawImage(bck,i*1024-offset[0],o*768-offset[1])
//console.log(i)
}}	
	
	if(socket.id!=null){
	
	p = players
	var trueId;
	for(var i in players){
	if(i==socket.id){
	offset[0] = players[i].x-250
	offset[1] = players[i].y-250
	drawBar(0,0,240,30,"#00E1FF",players[i].energy)
	drawBar(260,0,240,30,"#ee0010",players[i].hp)
	ctx.fillStyle = "#ffffff"
	ctx.fillText("x:" + Math.round(players[i].x/10),0,40)
	ctx.fillText("y:" + Math.round(players[i].y/10),0,50)
	}
	ctx.translate(250,250)
	ctx.rotate(players[i].rot);
	ctx.translate(-250,-250)	
	var ship = new Image();
	if(players[i].thrust){
	ship.src = "static/resources/shipOn.png";
	ctx.drawImage(ship,players[i].x-10-offset[0],players[i].y-10-offset[1])
	}else{
	ship.src = "static/resources/ship.png";
	ctx.drawImage(ship,players[i].x-10-offset[0],players[i].y-10-offset[1])
	}
	ctx.translate(250,250)
	ctx.rotate(-players[i].rot);
	ctx.translate(-250,-250)	
	
	}
	}
	console.log(baddies)
	for(var i in baddies){
	if(baddies[i].type==0)
	ctx.fillRect(baddies[i].x-offset[0],baddies[i].y-offset[1],10,10)
	else if(baddies[i].type==-1){
	ctx.fillStyle = "#ff0000"
	ctx.fillRect(baddies[i].x-offset[0],baddies[i].y-offset[1],5,5)
	}
	console.log(baddies)
	}
	
	socket.emit("response",keysDown);
})
var veiwOffset = [0, 0];
var playerID;
player = {}

function getPlayer() {
  var player = {
    name: prompt("Name please?"),
    x: 20,
    y: 20,
	vx:0,
	vy:0,
	rot:0,
	energy:100,
	hp:100,
	thrust:true,

  }
  socket.emit("newID", player);
  console.log("hide")
}

socket.on("setID", function(id) {
  localStorage.setItem(LOCALSTORAGEIDNAME, id);
  playerID = id;
});

window.beforeunload = function() { //before the player quits
  socket.emit('disconnect', localStorage.getItem(LOCALSTORAGEIDNAME)); //send the message disconnect to the server with no attachments
}
window.onkeydown = function(e){
if(e.key == "w")
keysDown[0]=true;
if(e.key == "a")
keysDown[1]=true;
if(e.key == "s")
keysDown[2]=true;
if(e.key == "d")
keysDown[3]=true;
}
window.onkeyup = function(e){
if(e.key == "w")
keysDown[0]=false;
if(e.key == "a")
keysDown[1]=false;
if(e.key == "s")
keysDown[2]=false;
if(e.key == "d")
keysDown[3]=false;
}