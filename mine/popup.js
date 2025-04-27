//var popup = window.open("test.html", "MeinMine", "width=500,height=600");	

var scale = 0.2

//var WIDTH = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)*5*scale;
//var HEIGHT = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)*5*scale;
var WIDTH = 500
var HEIGHT = 500
document.getElementById('cnvs').width = Math.round((WIDTH/5)-20)*5
document.getElementById('cnvs').height = Math.round((HEIGHT/5)-21)*5
ctx = document.getElementById('cnvs').getContext('2d')
var backPlace = false
var passBlocks = [255,122]
var blockrange = [0,0,Math.round((WIDTH/5)-21),Math.round((HEIGHT/5)-21)]
var squares = [
/*[1,0,1,0,1,0,1,0,1,0],
[1,1,0,0,1,1,0,0,1,1],
[1,1,1,1,1,1,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0],
[1,1,0,1,0,1,0,0,0,0],
[1,1,1,0,0,0,1,1,1,1],
[1,1,1,0,0,0,1,0,1,0],
[0,0,0,1,0,1,0,1,0,1],
[0,0,1,0,1,0,1,0,1,0],
[0,0,0,1,0,1,0,1,1,0],*/
]
var backSquares = []
var tree = [
[[255,255,255],[43,102,0],[43,102,0],[255,255,255]],
[[43,102,0],[43,102,0],[43,102,0],[43,102,0]],
[[255,255,255],[211,102,0],[211,102,0],[255,255,255]],
[[255,255,255],[211,102,0],[211,102,0],[255,255,255]],
]

var player = {

}
if(localStorage.getItem('minePlayer') != null){
	eval(localStorage.getItem('minePlayer'))
	
}else {
	player = {x : 0,
y : 10,
velY : 0,
	carying:[45,36,226],}
	
}

function generate(sX,fX,sY,fY){
	for(var i=sY; i>=fY;i--){
squares[i] = []
backSquares[i] = []
for(var o=sX;o>=fX;o--){
squares[i][o]=[0,0,0,0,0]
backSquares[i][o]=[]
if(i<.8*(sY)){
if(squares[i+1][o][0]==140 || i>.2*Math.round((HEIGHT/5)) ){
if(Math.random()*5 >= 1 && (squares[i+1][o][0]==140) || i>.4*Math.round((HEIGHT/5))){
for(var p =0;p<3;p++){
squares[i][o][p] = 140
}}else{
squares[i][o][0] = 158
squares[i][o][1] = 76
squares[i][o][2] = 0
}
}else if(squares[i+1][o][0]==158){
if(i>Math.random()*HEIGHT/5){
squares[i][o][0] = 158
squares[i][o][1] = 76
squares[i][o][2] = 0}
else{
squares[i][o][0] = 21
squares[i][o][1] = 145
squares[i][o][2] = 14
}

}
else{for(var p =0;p<3;p++){
squares[i][o][p] = 255}
}




}else if((i<=HEIGHT/5)-50){
for(var p =0;p<3;p++){
squares[i][o][p] = 140
}
}
backSquares[i][o][0] = parseInt(squares[i][o][0])
backSquares[i][o][1] = parseInt(squares[i][o][1])
backSquares[i][o][2] = parseInt(squares[i][o][2])
}
}
for(var i=sY; i>=fY;i--){
for(var o=sX;o>=fX;o--){
if(squares[i][o][0] == 140 && Math.random()*20>19){
squares[i][o][0] = 51
squares[i][o][1] = 51
squares[i][o][2] = 51

}else if(squares[i][o][0] == 140 && Math.random()*100>99){
squares[i][o][0] = 206
squares[i][o][1] = 0
squares[i][o][2] = 182

}else if(squares[i][o][0] == 140 && Math.random()*(Math.round((HEIGHT/5)-21)-i)>Math.round((HEIGHT/5)-21)-i-0.1 ){
squares[i][o][0] = 242
squares[i][o][1] = 218
squares[i][o][2] = 0

}else if(squares[i][o][0] == 140 && Math.random()*(Math.round((HEIGHT/5)-21)-i)>Math.round((HEIGHT/5)-21)-i-0.2 ){
squares[i][o][0] = 226
squares[i][o][1] = 145
squares[i][o][2] = 120

}else if(squares[i][o][0]==21 && Math.random()*30 > 29 && i-5 != 0 && i+5 != sX || false){
for(var a in tree){
for(var b in tree[a]){
//console.log(squares[i+p][o+a])
squares[parseInt(i)+parseInt(a)-3][parseInt(o)+parseInt(b)-1][0] = parseInt(tree[a][b][0])
squares[parseInt(i)+parseInt(a)-3][parseInt(o)+parseInt(b)-1][1] = parseInt(tree[a][b][1])
squares[parseInt(i)+parseInt(a)-3][parseInt(o)+parseInt(b)-1][2] = parseInt(tree[a][b][2])
}
}
}}}
	
}

function passable(block){
if(block[4]==true	){
return true
}
else {for(i in passBlocks){
//console.log(block+','+passBlocks[i])

if (block[0] == passBlocks[i]){
return true}}
}

}
if(localStorage.getItem('world') == null){
generate(Math.round((WIDTH/5)-21),0,Math.round((HEIGHT/5)-21),0)
}else{
	load = function(){
	var F=new Function (localStorage.getItem('world'));

	return(F());
	}
	load()}
function update(){	
if(player.y/5<=blockrange[1]+1 && blockrange[1] > 0){blockrange[1]--;blockrange[3]--;

for(var i = blockrange[2];i<=blockrange[0];i++){if(squares[i][blockrange[1]] == null){generate(i,i,blockrange[1],blockrange[1])}}}else if(player.y/5<=blockrange[1]+1){player.y = (blockrange[1]+2)*5}
if(player.y/5>=blockrange[3]-5){blockrange[1]++;blockrange[3]++;
for(var i = blockrange[0];i<=blockrange[2];i++){if(squares[i][blockrange[3]] == null || true){generate(i,i,blockrange[3],blockrange[3])}}}

if(player.x/5>=blockrange[2]-1){blockrange[0]++;blockrange[2]++;
for(var i = blockrange[1];i<=blockrange[3];i++){if(squares[blockrange[2]][i] == null){generate(blockrange[2],blockrange[0],i,i)}}}

if(((!passable(squares[Math.round((player.y)/5)+1][Math.round(player.x/5)])  || Math.round((player.y)/5)+1 == 100) && player.velY<=0) || !passable((squares[Math.round((player.y)/5)-1][Math.round(player.x/5)]) ) && player.velY>0) {
player.velY=0
}else{player.velY -=0.25}
player.y-=player.velY

ctx.clearRect(0,0,WIDTH,HEIGHT)
for(var i=blockrange[1];i<blockrange[3];i++){
for(var o in squares[i]){
if(squares[i][o][0]==43){
//console.log('0')
if((squares[parseInt(i)+1][o][0]==21) && Math.random()*200>199){
for(var a in tree){
for(var b in tree[a]){
//console.log(squares[i+p][o+a])
squares[parseInt(i)+parseInt(a)-3][parseInt(o)+parseInt(b)-1][0] = parseInt(tree[a][b][0])
squares[parseInt(i)+parseInt(a)-3][parseInt(o)+parseInt(b)-1][1] = parseInt(tree[a][b][1])
squares[parseInt(i)+parseInt(a)-3][parseInt(o)+parseInt(b)-1][2] = parseInt(tree[a][b][2])
}
}
}


}
 if(squares[parseInt(i)][o][0]==206 && (i>10)){
	 
	 
	 if( squares[parseInt(i-2)][o][0]==242){


if(squares[i][o][5] == null){
squares[i][o][5] = []
}
if(squares[parseInt(i)-1][o][0] != 255){
	console.log(squares[i][o][5])
squares[i][o][5].push(squares[parseInt(i-1)][o])

squares[parseInt(i-1)][o] = [255,255,255]
}
if(squares[i][o][5].length >= 1){
if(squares[parseInt(i)-3][o][0] == 255){

squares[parseInt(i)-3][o] = squares[i][o][5][0]
//console.log(store[i][o])
squares[i][o][5].shift()

}}
}


if( squares[parseInt(i-1)][o][0]==226&& squares[parseInt(i-2)][o][0]==51){
squares[parseInt(i-1)][o][0] = 176
squares[parseInt(i-1)][o][1] = 183
squares[parseInt(i-1)][o][2] = 180
squares[parseInt(i-2)][o][0] = 255
squares[parseInt(i-2)][o][1] = 255
squares[parseInt(i-2)][o][2] = 255

}
else if( squares[parseInt(i-1)][o][0]==176 && squares[parseInt(i-2)][o][0]==211){

squares[parseInt(i-2)][o][0] = 122
squares[parseInt(i-2)][o][1] = 59
squares[parseInt(i-2)][o][2] = 0

}else if( squares[parseInt(i-1)][o][0]==176 && squares[parseInt(i-3)][o][0]==242){

squares[parseInt(i-2)][o][4] = true

}else if( squares[parseInt(i-2)][o][0]==176){

squares[parseInt(i-1)][o] = [255,255,255]
}
}

if(squares[i][o][0] ==255){
if(backSquares[i][o][0 && 1 && 2] != 255){
if(backSquares[i][o][0]>=50){var red = backSquares[i][o][0]-50}else{var red = 0}
if(backSquares[i][o][1]>=50){var green = backSquares[i][o][1]-50}else{var green = 0}
if(backSquares[i][o][2]>=50){var blue = backSquares[i][o][2]-50}else{var blue = 0}
ctx.fillStyle = 'rgb('+red+','+green+','+blue+')'}else{

ctx.fillStyle = 'rgba(255,255,255,0)'
}
}else{

ctx.fillStyle = 'rgb('+squares[i][o][0]+','+squares[i][o][1]+','+squares[i][o][2]+')'}
ctx.fillRect((parseInt(o)-blockrange[0])*5,(parseInt(i)-blockrange[1])*5,5,5)
//console.log(i+","+o)
}
}
ctx.fillStyle = 'rgb('+player.carying[0]+','+player.carying[1]+','+player.carying[2]+')'
ctx.fillRect(Math.round(player.x/5-blockrange[0])*5,Math.round(player.y/5-blockrange[1])*5,5,5)
}
document.onkeydown = function (event){
 var tempvar = 'squares=['
  for(i in squares){
  tempvar+='['
  for(o in squares[i]){
  tempvar+='['
  for(p in squares[i][o]){
	  if(p == 5 || p== '5'){
		  tempvar += '['
		  for(var x in squares[i][o][p]){
			  tempvar+=squares[i][o][p][x]+','
		  }
		  tempvar += '],'
		  
	  }else{
	  tempvar += squares[i][o][p]+','}
  }
  tempvar+='],'
  }
  tempvar+='],'
  }
  tempvar+='];'
  tempvar += 'backSquares=['
  for(i in backSquares){
  tempvar+='['
  for(o in backSquares[i]){
  tempvar+='['
  for(p in backSquares[i][o]){
  tempvar += backSquares[i][o][p]+','
  }
  tempvar+='],'
  }
  tempvar+='],'
  }
  tempvar+='];'
  var minePlayer = 'player = {x:'+player.x+',y:'+player.y+',velY:'+player.velY+',carying:['+player.carying[0]+','+player.carying[1]+','+player.carying[2]+','+player.carying[3]+','+player.carying[4]+','+player.carying[5]+','+']};'


	 	 localStorage.setItem('world',tempvar)
	 	 localStorage.setItem('minePlayer',minePlayer)

if(event.keyCode === 32 && (!passable(squares[Math.round((player.y)/5)+1][Math.round(player.x/5)]))){player.velY +=5	}
if(event.keyCode === 65 && (passable(squares[Math.round((player.y)/5)][Math.round(player.x/5)-1]))){player.x -=5}
if(event.keyCode === 68 && (passable(squares[Math.round((player.y)/5)][Math.round(player.x/5)+1])	  )){player.x +=5}

if(event.keyCode === 73) {

if(!backPlace){
if((squares[Math.round((player.y)/5)-1][Math.round(player.x/5)][0 && 1 && 2]!= 255) && player.carying[1] == 36){
player.carying = squares[Math.round((player.y)/5)-1][Math.round(player.x/5)]
squares[Math.round((player.y)/5)-1][Math.round(player.x/5)] = [255,255,255]}else if((squares[Math.round((player.y)/5)-1][Math.round(player.x/5)][0 && 1 && 2]== 255) && player.carying[1] != 36){
squares[Math.round((player.y)/5)-1][Math.round(player.x/5)] = player.carying
player.carying = [45,36,226]}}
else{
if((backSquares[Math.round((player.y)/5)-1][Math.round(player.x/5)][0 && 1 && 2]!= 255) && player.carying[1] == 36){
player.carying = backSquares[Math.round((player.y)/5)-1][Math.round(player.x/5)]
backSquares[Math.round((player.y)/5)-1][Math.round(player.x/5)] = [255,255,255]}else if((backSquares[Math.round((player.y)/5)-1][Math.round(player.x/5)][0 && 1 && 2]== 255) && player.carying[1] != 36){
backSquares[Math.round((player.y)/5)-1][Math.round(player.x/5)] = player.carying
player.carying = [45,36,226]}}

}


if(event.keyCode === 75	){

if(!backPlace){
 if((squares[Math.round((player.y)/5)+1][Math.round(player.x/5)][0 && 1 && 2]!= 255) && player.carying[1] == 36){
player.carying = squares[Math.round((player.y)/5)+1][Math.round(player.x/5)]
squares[Math.round((player.y)/5)+1][Math.round(player.x/5)] = [255,255,255]}else if((squares[Math.round((player.y)/5)+1][Math.round(player.x/5)][0 && 1 && 2]== 255) && player.carying[1] != 36){
squares[Math.round((player.y)/5)+1][Math.round(player.x/5)] = player.carying
player.carying = [45,36,226]}}
else{if((backSquares[Math.round((player.y)/5)+1][Math.round(player.x/5)][0 && 1 && 2]!= 255) && player.carying[1] == 36){
player.carying = backSquares[Math.round((player.y)/5)+1][Math.round(player.x/5)]
backSquares[Math.round((player.y)/5)+1][Math.round(player.x/5)] = [255,255,255]}else if((backSquares[Math.round((player.y)/5)+1][Math.round(player.x/5)][0 && 1 && 2]== 255) && player.carying[1] != 36){
backSquares[Math.round((player.y)/5)+1][Math.round(player.x/5)] = player.carying
player.carying = [45,36,226]}}


}
if(event.keyCode === 76){ 

if(!backPlace){
if((squares[Math.round((player.y)/5)][Math.round(player.x/5)+1][0 && 1 && 2]!= 255) && player.carying[1] == 36){
player.carying = squares[Math.round((player.y)/5)][Math.round(player.x/5)+1]
squares[Math.round((player.y)/5)][Math.round(player.x/5)+1] = [255,255,255]}else if((squares[Math.round((player.y)/5)][Math.round(player.x/5)+1][0 && 1 && 2]== 255) && player.carying[1] != 36){
squares[Math.round((player.y)/5)][Math.round(player.x/5)+1] = player.carying
player.carying = [45,36,226]}}
else{if((backSquares[Math.round((player.y)/5)][Math.round(player.x/5)+1][0 && 1 && 2]!= 255) && player.carying[1] == 36){
player.carying = backSquares[Math.round((player.y)/5)][Math.round(player.x/5)+1]
backSquares[Math.round((player.y)/5)][Math.round(player.x/5)+1] = [255,255,255]}else if((backSquares[Math.round((player.y)/5)][Math.round(player.x/5)+1][0 && 1 && 2]== 255) && player.carying[1] != 36){
backSquares[Math.round((player.y)/5)][Math.round(player.x/5)+1] = player.carying
player.carying = [45,36,226]}}


}
if(event.keyCode === 74){ 

if(!backPlace){
if((squares[Math.round((player.y)/5)][Math.round(player.x/5)-1][0 && 1 && 2]!= 255) && player.carying[1] == 36){
player.carying = squares[Math.round((player.y)/5)][Math.round(player.x/5)-1]
squares[Math.round((player.y)/5)][Math.round(player.x/5)-1] = [255,255,255]
}else if((squares[Math.round((player.y)/5)][Math.round(player.x/5)-1][0 && 1 && 2]== 255) && player.carying[1] != 36){
squares[Math.round((player.y)/5)][Math.round(player.x/5)-1] = player.carying
player.carying = [45,36,226]}}
else{if((backSquares[Math.round((player.y)/5)][Math.round(player.x/5)-1][0 && 1 && 2]!= 255) && player.carying[1] == 36){
player.carying = backSquares[Math.round((player.y)/5)][Math.round(player.x/5)-1]
backSquares[Math.round((player.y)/5)][Math.round(player.x/5)-1] = [255,255,255]
}else if((backSquares[Math.round((player.y)/5)][Math.round(player.x/5)-1][0 && 1 && 2]== 255) && player.carying[1] != 36){
backSquares[Math.round((player.y)/5)][Math.round(player.x/5)-1] = player.carying
player.carying = [45,36,226]}}	


}
if(event.keyCode == 88){
if(backPlace == false){backPlace = true}else{backPlace = false}

}




}

  
 window.onunload = function(){
	 
	
	 //localStorage.setItem('minePlayer','player = {x : '+player.x+',y : '+player.y+',velY : '+player.vely+',carying:'+carryString+'}')
	 
 }




setInterval(update,1000/30)