(function(){	
	var wall = new Audio('sound/wall.mp3');
	var sitdown = new Audio('sound/sitDown.mp3');
	var comebaby = new Audio('sound/comebaby.mp3');
	var latinos = new Audio('sound/latinos.mp3');
	var thatseasy = new Audio('sound/thatseasy.mp3');
	
	var slap1 = new Audio('sound/slap1.mp3');
	var slap2 = new Audio('sound/slap2.mp3');
	var slap3 = new Audio('sound/slap3.mp3');
	var slaps = [
		slap1, slap2 /* ,slap3*/
	];
	var sounds = [
		wall, sitdown, comebaby, latinos, thatseasy
	];
	var randomindex;
	
	
	var counter = 0;

	window.addEventListener("keydown", function(event){
		var canSlap = true;
		
		if(event.defaultPrevented){
			return;
		}
		
			switch (event.keyCode){
				case(39):
				 randomindex = Math.floor(Math.random() * 5);
				 randomslap = Math.floor(Math.random() * 2); /*3*/
				
				//play right slap
				rightSlap();
				setTimeout(function(){
					 slaps[randomslap].play();
					document.getElementById("trump").setAttribute("src", "trump_right.png");
					sounds[randomindex].play();
					setTimeout(function(){
						document.getElementById("trump").setAttribute("src", "trump.png");
					}, 600);
				
					
					
					
				}, 200);
				
				counter++;
				if(counter == 15){
					//redirect
					//window.location.href = "http://www.berniesanders.com";
					alert("Looks like your slap happy")
					window.location.reload();
				}
				break;
				
				case(37):
				randomslap = Math.floor(Math.random() * 3);
				 randomindex= Math.floor(Math.random()*5);
				leftSlap();
				
				setTimeout(function(){
					 slaps[randomslap].play();
					//play left slap
				document.getElementById("trump").setAttribute("src", "trump_left.png");
				sounds[randomindex].play();
				setTimeout(function(){
					document.getElementById("trump").setAttribute("src", "trump.png");
					
				}, 600);
				
					
					
				}, 200);
				counter++
				
				
				if(counter == 15){
					//redirect
					//window.location.href = "http://www.berniesanders.com";
					alert("Looks like your slap happy")
					window.location.reload();
					
				}
				break;
			
				default:
				return;
			}
	
		event.preventDefault();
	}, true);
	
	
	var leftSlap = function(){
		
		document.getElementById("meat").setAttribute("src","StripSteak.png");
		var start = null;
		
		// Get the image Element
		var element = document.getElementById("meat");
		element.style.display = "block";
		element.style.position = 'absolute';
		element.style.marginLeft = window.innerWidth - 200 + "px";
		//element.style.right = window.innerWidth*.3+"px";
		console.log("left: " + element.style.left + " \n right: " + element.style.right);
		function step(timestamp) {
		  // Init start the first time in step()
		  if (!start) start = timestamp;
		  
		  // Calculate a time value representing progress
		  var t = (timestamp - start)/1000;
		  
		  // Set position of image using t
		  
		  element.style.left = -(4000*(t)) + "px";
		  element.style.top  = 50*Math.cos(5*t) + "px";
		  
		  // Schedule another update prior to next refresh
		  window.requestAnimationFrame(step);
		}
		
		// Kick off the animation
		window.requestAnimationFrame(step);	
		setTimeout(function(){
			step = function(){};
		}, 1200);
		
		element.style.left = window.innerWidth/2 + "px";
	};
	
	var rightSlap = function(){
		
		document.getElementById("meat").setAttribute("src","StripSteak_flipped.png");
		
		var start = null;
		
		// Get the image Element
		var element = document.getElementById("meat");
		element.style.marginLeft = 0;
		element.style.display = "block";
		element.style.position = 'absolute';
		
		element.style.left = window.innerWidth*.3 + "px";
			console.log("left: " + element.style.left + " \n right: " + element.style.right);
		

		function step2(timestamp) {
		  // Init start the first time in step()
		  if (!start) start = timestamp;
		  
		  // Calculate a time value representing progress
		  var t = (timestamp - start)/1000;
		  
		  // Set position of image using t
		  
		  element.style.left = 4000*(t) + "px";
		  element.style.top  = 50*Math.cos(5*t) + "px";
		
		  // Schedule another update prior to next refresh
		  window.requestAnimationFrame(step2);
		}
		
		
				
		
	
		
		
		// Kick off the animation
		window.requestAnimationFrame(step2);	
		setTimeout(function(){
			step2 = function(){};
		}, 1000);
		
		element.style.left = window.innerWidth/2 + "px";
		
	}


	function trumpRight(){
		
		document.getElementById("trump").setAttribute("src", "trump_right.png");
					sounds[randomindex].play();
					setTimeout(function(){
						document.getElementById("trump").setAttribute("src", "trump.png");
					}, 600);
		
	}

})();