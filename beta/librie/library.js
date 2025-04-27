var lib = {
	WIDTH:null,
	HEIGHT:null,
	defaultCanvas:null,
	setCanvas:function(id){
		this.defaultCanvas = document.getElementById(id).getContext('2d')
		this.WIDTH = document.getElementById(id).width
		this.HEIGHT = document.getElementById(id).height
	},
	draw:{
		rect:function(x,y,z,width,height,color='#000000',rotx=0,roty=0,rotz=0,fill=true){
			lib.defaultCanvas.fillStyle = color
			lib.defaultCanvas.strokeStyle = color
			lib.defaultCanvas.translate(x,y)
			lib.defaultCanvas.rotate(rotz*Math.PI/180);
			lib.defaultCanvas.translate(-x,-y)
			
			
			if(z<0)     {width=0;height=0}
			else if(z!=0){
				for(var i = 0;i<z;i+=1){
			var diff = [
			(lib.WIDTH/2+x)/2,
			(lib.HEIGHT/2+y)/2,
			(lib.WIDTH/2+(x+width/2))/2-x/2,
			(lib.HEIGHT/2+(y+height/2))/2-y/2
				]
			x=diff[0]
			width=diff[2]
			y=diff[1]
			height=diff[3]
				}
			
			
			console.log(diff)
			}
			
			cords = [[x,y],
			[
			x+(width*Math.cos(roty*Math.PI/180)),
			y+(height*Math.sin(roty*Math.PI/180)/Math.PI)],
			[
			x+(width*(Math.cos(roty*Math.PI/180)-Math.sin(rotx*Math.PI/180)/Math.PI)),
			y+(height*((1-(Math.sin(roty*Math.PI/180)/Math.PI))- 1+ (Math.cos(rotx*Math.PI/180))))],
			
			[x+(width*Math.sin(rotx*Math.PI/180)/Math.PI),y+(height*Math.cos(rotx*Math.PI/180))]]
			//cords = [[x,y],[x+width,y],[x+width,y+height],[x,y+height]]
			
			lib.defaultCanvas.beginPath()
			lib.defaultCanvas.moveTo(cords[0][0],cords[0][1])
			lib.defaultCanvas.lineTo(cords[1][0],cords[1][1])
			lib.defaultCanvas.lineTo(cords[2][0],cords[2][1])
			lib.defaultCanvas.lineTo(cords[3][0],cords[3][1])
			lib.defaultCanvas.lineTo(cords[0][0],cords[0][1])
			if(fill){
				lib.defaultCanvas.fill()}
			else{
				lib.defaultCanvas.stroke()
			}
			//lib.defaultCanvas.fillRect(x,y,width,height)
			lib.defaultCanvas.translate(x,y)
			lib.defaultCanvas.rotate(-rotz*Math.PI/180);
			lib.defaultCanvas.translate(-x,-y)
		},
		cube:function(x,y,z,width,height,length,rotx=0,roty=0,rotz=0){
			lib.rect(x,y)
			
		}
		
	}
}