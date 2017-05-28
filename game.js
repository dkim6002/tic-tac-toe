const blocks = document.body.querySelectorAll('.tile');
const [p1, p2] = ['x', 'o'];
let current_player = p1;
let counter = 1;


let moves = (id) => {
	let el = document.getElementById(id);
	if (current_player === p1) {
		el.innerHTML = p1;
		el.removeAttribute('onClick');
		current_player = p2
	}else {
		el.innerHTML = p2;
		el.removeAttribute('onClick');
		current_player = p1;
	}
	count();
}

let count = () => {
	let plays = counter++;
	if (plays === 9) {
		setTimeout(function() { 
			let message = `Game Over
			Hit OK to play again!`;
			let res = confirm(message)
			if (res == true) {
				restart();
			}
		}, 300);
	}
}

let restart = () => {
	for (let i = 0; i < blocks.length; i++) {
		blocks[i].innerHTML = '';
		blocks[i].setAttribute('onClick', 'moves(id)');
	}
	current_player = p1;
	counter = 1;
}

