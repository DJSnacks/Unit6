function zeroCount(arry) {
    var arrylen = arry.length;
	var cnt = 0
	for(var i = 0; i < arrylen; i++) {
		if(arry[i] === 0){
			cnt += 1
		}
	}
	return cnt
    }
