$(document).ready(function(){
	$('#createRoute').click(function(){
		var from = $('#from').val();
		var to = $('#to').val();
		if(from === '' || to === ''){
			alert('Debes escribir un origen y un destino para generar el mapa :(');
		}else{
			lauchMap(from, to);
		}
	});
});