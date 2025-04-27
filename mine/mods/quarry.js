console.log("quarry successfully loaded")

function quarry(){
	for(var i=blockrange[1];i<blockrange[3];i++){
	for(var o in squares[i]){
	if(squares[i][o][0] == 206 && squares[i-1][parseInt(o)][0] == 242 && squares[i-2][parseInt(o)][0] == 242){
		squares[i][o] = [165.211,109,115,1,0]
		squares[i-1][parseInt(o)] = [255,255,255]
		squares[i-2][parseInt(o)] = [255,255,255]
		
	}else if(squares[i][o][0] == 165.211 && frames%1== 0 && squares[i][parseInt(o)-1][0] == 176 &&squares[i][parseInt(o)+1][0] == 176){
		for(var x=0;x<10;x++){
		var depth = i
		var digging = true
		while(digging){
			if(squares[depth+1] != null){
			if(squares[i-1][o][0] == 255){
				depth++
				if(squares[depth][o][0] != 255 ){
				squares[i-1][o] = squares[depth][o]
				squares[depth][o] = [255,255,255]
				digging = false
				}
			}else{digging=false}}else{digging = false}
		}
	}
	}}}}