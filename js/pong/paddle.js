Pong.Objects.Paddle = function(canvas){
	var paddleWidth = 15;
	var paddleHeight = 50;
	var xPos = canvas.width-paddleWidth-20;
	var yPos = canvas.height/2;
	var velocity = PADDLE_VELOCITY;

	function moveUp(timeModifier){
		if (yPos < 0) return;
		yPos -= velocity * timeModifier;
	};

	function moveDown(timeModifier){
		if (yPos > canvas.height-paddleHeight) return;
		yPos += velocity * timeModifier;
	};

	function render(){
		var context = canvas.getContext('2d');
		context.beginPath();
		context.rect(xPos, yPos, paddleWidth, paddleHeight);
		context.fillStyle = 'white';
		context.fill();
	};

	return {
		render: render,
		update: update,
		moveUp: moveUp,
		moveDown: moveDown,
	};
}