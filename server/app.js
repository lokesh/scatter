const express = require('express')();
const Http = require('http').Server(express);
const io = require('socket.io')(Http);

let position = {
	x: 200,
	y: 200,
};

io.on('connection', socket => {
	socket.emit('position', po sition)

	socket.on('move', () => {
		position = {
			x: Math.random() * 200,
			y: Math.random() * 200,
		}
		io.emit('position', position);
	})
})

Http.listen(3000, () => {
	console.log('hi there');
})