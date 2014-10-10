Pong.Objects.Player = function(canvas){
	var paddle = new Pong.Objects.Paddle(canvas, canvas.width-40, canvas.height/2);

	function update(timeModifier){
		if (UP_KEY in keysDown){
			paddle.moveUp(timeModifier);
		} // Note no else so we allow the user to press both at the same time and stay in place
		if (DOWN_KEY in keysDown){
			paddle.moveDown(timeModifier);
		}
	}

	return {
		type: "player",
		render: paddle.render,
		update: update,
		getCollisionRectangle: paddle.getCollisionRectangle,
	};
}