var canvas = document.getElementById('pongCanvas');
var context = canvas.getContext('2d');

var ball = new Pong.Objects.Ball(canvas);

var playing = true;

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

function render(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	ball.render();
} 

function update(modifier){
	ball.update(modifier);
}

var then = Date.now();
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;
	
	requestAnimationFrame(main);
};

main();