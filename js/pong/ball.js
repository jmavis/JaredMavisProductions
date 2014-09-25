console.log("hai");
Pong.Objects.Ball = function(canvas){
	var x = canvas.width/2;
	var y = canvas.height/2;
	var xVelocity = Math.random() * ((BALL_VELOCITY * 1.3) - BALL_VELOCITY) + BALL_VELOCITY;
	var yVelocity = BALL_VELOCITY;

	function render(){
		var context = canvas.getContext('2d');
		var radius = 10;

		context.beginPath();
		context.arc(x, y, radius, 0, 2 * Math.PI, false);
		context.fillStyle = 'white';
		context.fill();
	}

	return {
		render: render,
		update:  function(modifier){
			if (y <= 0){
				yVelocity *= -1;
				y = 0;
			} else if (y >= canvas.height){
				yVelocity *= -1;
				y = canvas.height;
			}

			if (x <= 0){
				xVelocity *= -1;
				console.log("left x");
				x = 0
			} else if (x >= canvas.width){
				xVelocity *= -1;
				console.log("right x");
				x = canvas.width;
			} 


			x += xVelocity * modifier;
			y += yVelocity * modifier;
			console.log("(" + x + ", " + y + ")");

			
			
		},
	};
};