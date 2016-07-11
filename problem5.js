function random(x, y) {
    var min = x;
    var max = y;
	return(Math.floor(Math.random() * (max - min + 1)) + min);
}