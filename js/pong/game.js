var canvas = document.getElementById('pongCanvas');
var context = canvas.getContext('2d');

var objects = [];
var ball = new Pong.Objects.Ball(canvas);
objects.push(ball);

var player = new Pong.Objects.Player(canvas);
objects.push(player);

var computer = new Pong.Objects.Computer(canvas, ball);
objects.push(computer);

var playing = true;

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

function render(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0, length = objects.length; i < length; i++){
		objects[i].render();
	}
} 

function update(modifier){
	for (var i = 0, length = objects.length; i < length; i++){
		objects[i].update(modifier);
	}
}

var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

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