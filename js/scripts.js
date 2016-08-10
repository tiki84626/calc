var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};


$(document).ready(function() {
	$("form#calc").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#number1").val());
		var number2 = parseInt($("#number2").val());
		var result = add(number1, number2);
		$("#output").text(result);
	});

	$("form#sub").submit(function(event) {
		event.preventDefault();
		var number1Sub = parseInt($("#number1-sub").val());
		var number2Sub = parseInt($("#number2-sub").val());
		var result = subtract(number1Sub, number2Sub);
		$("#output").text(result);
	});

	$("form#div").submit(function(event) {
		event.preventDefault();
		var number1Div = parseInt($("#number1-div").val());
		var number2Div = parseInt($("#number2-div").val());
		var result = divide(number1Div, number2Div);
		$("#output").text(result);
  });

	$("form#mult").submit(function(event) {
		event.preventDefault();
		var number1Mult = parseInt($("#number1-mult").val());
		var number2Mult = parseInt($("#number2-mult").val());
		var result = multiply(number1Mult, number2Mult);
		$("#output").text(result);
  });
});
