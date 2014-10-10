Pong.Objects.Computer = function(canvas, ball){
	var paddle = new Pong.Objects.Paddle(canvas, 40, canvas.height/2);

	function update(timeModifier){
		if (ball.getPos().y < paddle.getPos().y){
			paddle.moveUp(timeModifier);
		} else if (ball.getPos().y > paddle.getPos().y){
			paddle.moveDown(timeModifier);
		}
	}

	return {
		type: "computer",
		render: paddle.render,
		update: update,
		getCollisionRectangle: paddle.getCollisionRectangle,
	};
}