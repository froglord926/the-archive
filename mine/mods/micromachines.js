console.log("micromachines successfully loaded")

function micromachines(){
	if(player.inv[4][0] == 206 && Math.round(player.inv[0 && 1 && 2 && 6 && 7 && 8][0]%1*1000)/1000  == 0.001 && player.inv[3 && 5][0] == 51){
		for(var i in player.inv){
			player.inv[i] = [45,36,226];
		}
		player.inv[4] = [200.676,51,150,0,0]
	}
	if(player.inv[4][0] == 200.676 && player.inv[0 && 1 && 2 && 6 && 7 && 8][0] == 100 && player.inv[3 && 5][0] == 176){
		for(var i in player.inv){
			player.inv[i] = [45,36,226];
		}
		player.inv[4] = [176.676,130,150,0,0]
	}
	if(player.inv[4][0] == 176.676 && player.inv[0 && 1 && 2 && 6 && 7 && 8][0] == 100 && player.inv[3 && 5][0] == 242){
		for(var i in player.inv){
			player.inv[i] = [45,36,226];
		}
		player.inv[4] = [177.676,50,50,0,0]
	}
	for(var i in player.inv){
		if(i>=6){
			if([200.676,176.676,177.676].includes(player.inv[i][0]) && player.inv[i-6][0] == 176){
				player.inv[i-3]= [45,36,226]
				player.carying = player.inv[player.invSlot]
			}
			if([176.676,177.676].includes(player.inv[i][0]) && Math.round(player.inv[parseInt(i)-6][0]%1*1000)/1000 == 0.001 && player.inv[i-3][0]==45){
				player.inv[i-3]= player.inv[parseInt(i)-6]
				player.carying = player.inv[player.invSlot]
			}
			if(player.inv[i][0] == 177.676 && player.inv[i-6][0] == 43 && Math.random()*200>195 && player.inv[i-3][0]==45){
				player.inv[i-3]= [211,102,0]
				player.carying = player.inv[player.invSlot]
			}
		}
	}
}