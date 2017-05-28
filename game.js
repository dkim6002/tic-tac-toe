const [p1, p2] = ['x', 'o'];
let current_player = p1;

let init = () => {
	
}

let moves = (id) => {
	console.log('click' + id);
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
}

let restart = () => {

}
