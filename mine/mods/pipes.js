console.log("pipes successfully loaded")

function pipes(){
	for(var i=blockrange[1];i<blockrange[3];i++){
	for(var o in squares[i]){
	//pipes -- [89.212,214-217,199]    pusher -- [31.212,73-76,211]pipe bench -- [212.212,0,14]

	//bench crafting

	//block behavior/ pipe crafting
	if(squares[i][o][0] == 212.212){
		//console.log(squares[i-2][o][0])
		if(squares[i-2][o][0] == 176){
			squares[i-2][o] = [89.212,214,199,1,0]
		}else
		if(squares[i-2][o][0] == 211){
			squares[i-2][o] = [31.212,73,211,1,0]
		}else
		if(squares[i-2][o][0] == 242){
			squares[i-2][o] = [40.212,63,81,1,0]
		}
		if(squares[i+1][o][0] == 89.212 && squares[i+2][o][0] == 255){
		squares[i+1][o][1]++
		if(squares[i+1][o][1] > 217){squares[i+1][o][1] = 214}
		squares[i+2][o] = squares[i+1][o]
		squares[i+1][o] = [255,255,255]}
		if(squares[i+1][o][0] == 31.212 && squares[i+2][o][0] == 255){
		squares[i+1][o][1]++
		if(squares[i+1][o][1] > 76){squares[i+1][o][1] = 73}
		squares[i+2][o] = squares[i+1][o]
		squares[i+1][o] = [255,255,255]}
		
	}else if(squares[i][o][0] == 40.212 && squares[i][o][1] == 63 &&(squares[parseInt(i)-1][o][0] == 255 && squares[parseInt(i)+1][o][0] != 255) && (squares[i+1][o][0] == squares[i][parseInt(o)-1][0])){
			squares[parseInt(i)-1][o] = squares[parseInt(i)+1][o]
			squares[parseInt(i)+1][o] = [255,255,255]
			
	
		
	}
	else if(squares[i][o][0] == 89.212 ){
		if(squares[i][o][1] == 214 &&(squares[parseInt(i)-1][o][0] == 255 && squares[parseInt(i)+1][o][0] != 255)){

			if(Math.round(player.x/5)==parseInt(o) && Math.round(player.y/5) == parseInt(i)-1){player.y-=5}
			squares[parseInt(i)-1][o] = squares[parseInt(i)+1][o]
			squares[parseInt(i)+1][o] = [255,255,255]
			
			
			
	}else if(squares[i][o][1] == 215 &&(squares[parseInt(i)+1][o][0] == 255 && squares[parseInt(i)-1][o][0] != 255)){
			squares[parseInt(i)+1][o] = squares[parseInt(i)-1][o]
			squares[parseInt(i)-1][o] = [255,255,255]
			if(Math.round(player.x/5)==parseInt(o) && Math.round(player.y/5) == i+1){player.y+=5}
			
	}else if(squares[i][o][1] == 216 &&(squares[i][parseInt(o)-1][0] == 255 && squares[i][parseInt(o)+1][0] != 255)){
			squares[i][parseInt(o)-1] = squares[i][parseInt(o)+1]
			squares[i][parseInt(o)+1] = [255,255,255]
			if(Math.round(player.x/5)==parseInt(o)-1 && Math.round(player.y/5) == i){player.x-=5}
			
	}else if(squares[i][o][1] == 217 &&(squares[i][parseInt(o)+1][0] == 255 && squares[i][parseInt(o)-1][0] != 255)){
			squares[i][parseInt(o)+1] = squares[i][parseInt(o)-1]
			squares[i][parseInt(o)-1] = [255,255,255]
			if(Math.round(player.x/5)==parseInt(o)+1 && Math.round(player.y/5) == i){player.x+=5}
			
	}else{}
}else if(squares[i][o][0] == 31.212 ){
		if(squares[i][o][1] == 73 &&(squares[parseInt(i)-2][o][0] == 255 && squares[parseInt(i)-1][o][0] != 255)){
			squares[parseInt(i)-2][o] = squares[parseInt(i)-1][o]
			squares[parseInt(i)-1][o] = [255,255,255]
			if(Math.round(player.x/5)==parseInt(o) && Math.round(player.y/5) == parseInt(i)-2){player.y-=5}
			
			
	}else if(squares[i][o][1] == 74 &&(squares[parseInt(i)+2][o][0] == 255 && squares[parseInt(i)+1][o][0] != 255)){
			squares[parseInt(i)+2][o] = squares[parseInt(i)+1][o]
			squares[parseInt(i)+1][o] = [255,255,255]
			if(Math.round(player.x/5)==parseInt(o) && Math.round(player.y/5) == parseInt(i)+2){player.y+=5}
			
	}else if(squares[i][o][1] == 75 &&(squares[i][parseInt(o)-2][0] == 255 && squares[i][parseInt(o)-1][0] != 255)){
			squares[i][parseInt(o)-2] = squares[i][parseInt(o)-1]
			squares[i][parseInt(o)-1] = [255,255,255]
			if(Math.round(player.x/5)==parseInt(o)-1 && Math.round(player.y/5) == parseInt(i)){player.x-=5}
			
	}else if(squares[i][o][1] == 76 &&(squares[i][parseInt(o)+2][0] == 255 && squares[i][parseInt(o)+1][0] != 255)){
			squares[i][parseInt(o)+2] = squares[i][parseInt(o)+1]
			squares[i][parseInt(o)+1] = [255,255,255]
			if(Math.round(player.x/5)==parseInt(o)+2 && Math.round(player.y/5) == parseInt(i)){player.x+=5}
			
	}else{}
	
	}}
	
}

	
		if(player.inv[4][0] == 206){
		
		if(player.inv[0][0] == 211 &&  player.inv[7][0] == 176 &&  player.inv[2][0] == 211){
		player.inv[0] = [45,36,226]
		player.inv[7] = [45,36,226]
		player.inv[2] = [45,36,226]
		player.inv[4] = [212.212,0,14,0,0]

	}}


}