var correct;
var score = 0;
//Inicio del juego
game();

//elazo el click de los circulos a la función guess
$('.option').on('click' , guess);

$('.close a').on('click', function() {
	$('.result').hide();
	$('.option').removeClass('scale');
	game();
});


function game (){
	correct = getRandomInt(0,2);
	$('.option').each(function(index){

		var color = generateColor();
		$(this).css('background-color', color);

		if (index === correct) {
			$('.question').text(color);
		};
	});
}

function guess () {
	$(this).addClass('scale');
	index = $(this).index();
	if (index === correct) {
		// alert("correcto!!!");
		$('.result.won').show();
		score++;
	}
	else{
		// alert("incorrecto!!!");
		$('.result.lost').show();
		score = 0;
	};
	$('.score span').text(score);
	

}





function getRandomInt(min, max) { 
	return Math.floor(Math.random() * (max - min)) + min;
}

function generateColor(){
	return 'rgb(' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ')';
}

