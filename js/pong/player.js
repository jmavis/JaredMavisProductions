Pong.Objects.Player = function(canvas){
	var playerWidth = 10;
	var playerHeight = 20;
	var xPos = canvas.width-10;
	var yPos = canvas.height/2;;
	var velocity = PLAYER_VELOCITY;

	function onKeyboardUp(timeModifier){
		yPos += velocity * timeModifier;
	};

	function onKeyboardDown(timeModifier){
		yPos -= velocity * timeModifier;
	};

	function render(){
		var context = canvas.getContext('2d');
		var radius = 10;

		context.beginPath();
		context.arc(xPos, yPos, radius, 0, 2 * Math.PI, false);
		context.fillStyle = 'white';
		context.fill();
	};

	return {
		render: render,
		update: function(){},
		onKeyboardUp: onKeyboardUp,
		onKeyboardDown: onKeyboardDown,
	};
}