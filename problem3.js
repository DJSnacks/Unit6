function avg() {
    var str = prompt("Enter numbers seperated by spaces");
    var spl = str.split(" ");
    var total = parseFloat(spl[0]);

    for ( var i = 1; i < spl.length; i += 1) {

       total += parseFloat(spl[i]);
    }

return(total / spl.length);

}