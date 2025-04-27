// dependenciesday
var express = require("express");
var http = require("http");
var path = require("path");
var socketIO = require("socket.io");
var app = express();
var server = http.Server(app);
var io = socketIO(server);
var fs = require("fs");
var chat = "";

app.set("port", 5000);
app.use("/static", express.static(__dirname + "/static"));
// routing
app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname, "/static/index.html"));
});
// start the server
server.listen(5000, function() {
  write("Starting server on port 5000");
});
// create a database for the players
var players = {};
var playersID = JSON.parse(fs.readFileSync("playersBackup.txt"));
var baddies = [];
// detects connection to the server
io.sockets.on("connection", function(socket) {
  // the parameter gets the users socket id
  socket.on("p",function(){console.log(socket.id)})
  socket.on("newID", function(player) {
  try{
    var id = Math.random() * 100;
    players[socket.id] = player;
    write(player.name + " has entered!");

    players[socket.id].id = id;
    playersID[id] = players[socket.id];
    socket.emit("setID", id);
	}catch(e){warn(e)}
  });
  socket.on("sendID", function(id) {
  try{
    if (playersID[id] != null) {
      players[socket.id] = playersID[id];
      write(players[socket.id].name + " has re-entered");
    } else {
      warn("false player tried to enter");
    }
	}catch(e){warn(e)}
  });

  socket.on("disconnect", function(id) {
  try{
    // when the player disconnects
    if (playersID[id] != undefined) write(playersID[id].name + " has left");
    playersID[id] = players[socket.id];

    delete players[socket.id]; // removes the player from the player batabase
	}catch(e){warn(e)}
  });
  socket.on("response",function(keys){
  
  try{
  
  if(Math.random()>.9){
  angle = Math.random()*2*Math.PI;
  dist = Math.random()*100+500
  var x = players[socket.id].x+dist*Math.cos(angle)
  var y = players[socket.id].y+dist*Math.sin(angle)
  var canSpawn = true;
  for(var i in players){
  if(Math.sqrt(Math.pow(players[i].x-x,2)+Math.pow(players[i].y-y,2))<500)
  canSpawn = false;
  }
  if(canSpawn)
  baddies.push({x:x,y:y,timeout:900,type:0,vx:0,vy:0,});
  }
  
  
  if(players[socket.id].energy<100)
  players[socket.id].energy+=1;
  var speed = 0.5;
  if(keys[2]&&players[socket.id].energy>=5){
  baddies.push({
  timeout:700,
  x:players[socket.id].x+players[socket.id].vx,
  y:players[socket.id].y+players[socket.id].vy,
  type:-1,vy:3*Math.sin(players[socket.id].rot)+players[socket.id].vy,
  vx:3*Math.cos(players[socket.id].rot)+players[socket.id].vx})
  players[socket.id].energy-=5;
  }
  if(keys[0] && players[socket.id].energy >= 2){
  players[socket.id].vy+=speed*Math.sin(players[socket.id].rot)
  players[socket.id].vx+=speed*Math.cos(players[socket.id].rot)
  players[socket.id].energy-=2}
  if(keys[3])
  players[socket.id].rot+=0.1
  if(keys[1])
  players[socket.id].rot-=0.1
  if(players[socket.id].rot<0)
  players[socket.id].rot  = 2*Math.PI+players[socket.id].rot
  if(players[socket.id].rot>2*Math.PI)
  players[socket.id].rot  = players[socket.id].rot  - 2*Math.PI
  players[socket.id].x+=players[socket.id].vx;
  players[socket.id].y+=players[socket.id].vy;
  
  }catch(e){console.log(e)}
  });
});
update = function() {	
	var newp = {}
	for(var i in players){
	newp[i] = {
	x:players[i].x,
	y:players[i].y,
	rot:players[i].rot,
	energy:players[i].energy,
	thrust:players[i].thrust,
	hp:players[i].hp,
	}
	}
	var newb = []
	for(var i in baddies){
	newb[i] = {
	x:baddies[i].x,
	y:baddies[i].y,
	type:baddies[i].type,
	}
	}
  io.sockets.emit("update", newp,newb);
  for(var i in baddies){
  baddies[i].x+=baddies[i].vx
  baddies[i].y+=baddies[i].vy
  if(baddies[i].timeout<=0){
  var canDespawn = true;
  for(var o in players){
  if(Math.sqrt(Math.pow(players[o].x-baddies[i].x,2)+Math.pow(players[o].y-baddies[i].y,2))<500)
  canDespawn = false;
  }
  if(canDespawn){
  baddies.splice(i,1)
  }
  }else{baddies[i].timeout++;}
  for(var o in players){
  if(Math.sqrt(Math.pow(players[o].x-baddies[i].x,2)+Math.pow(players[o].y-baddies[i].y,2))>700)
  baddies.splice(i,1)
  break;
  }
  if(baddies[i].type==0){}
  else if(baddies[i].type==-1){
  for(o in baddies){
  if(rectCollide(baddies[i],baddies[o]))
  console.log("hi")}
  }
};
}
rectCollide = function(obj1,obj2){
if((obj1.x>obj2.x+obj2.width || obj1.x+obj1.width < obj2.x) && (obj1.y>obj2.y+obj2.height|| obj1.y+obj1.height< obj2.y))
return true;
return false;
}
save = function(reason = "interval") {
 fs.writeFile("playersBackup.txt", JSON.stringify(playersID), function(err) {
    if (err) {
      return write(err);
    }
    write("the server and players have been saved because " + reason);
  });
};

write = function(thing) {
  var c = new Date();
  console.log(
    "\x1b[0m[" +
      c.getHours() +
      ":" +
      c.getMinutes() +
      ":" +
      c.getSeconds() +
      "]:" +
      thing
  );
};
warn = function(thing) {
  var c = new Date();
  console.log(
    "\x1b[0m[" +
      c.getHours() +
      ":" +
      c.getMinutes() +
      ":" +
      c.getSeconds() +
      "]:\x1b[1m\x1b[31m" +
      thing
  );
};



setInterval(save, 300000);
setInterval(update, 1000 / 15);
