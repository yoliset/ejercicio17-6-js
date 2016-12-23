
var make10 = function(a, b) {   
    if (a == 10 || b == 10 || a+b == 10) {
		return 1;
	}
	else {
		return 0;
	}

};
var evaluar = function () {
	var a= parseInt(document.getElementById("a").value);
	var b = parseInt(document.getElementById("b").value);
    var salida = make10(a, b);
    $('#salida').val(salida);
}




