		var nums = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!','@','#','$','%','^','&','*','(',')','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
		var count = []
		var string = 1
		idk = function(){
		string = 1
		count.push(1)
		for (var o in count){
		for(var i in nums){
			//console.log(nums[i])
			count[o]=nums[i]
			console.log(count.join(""))
			//document.getElementById('login-password').value = count.join("")
			//document.getElementById('login_form').submit()
		}
		
		}
		}