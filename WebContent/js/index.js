$(document).ready(function(){
	$('#createRoute').click(function(){
		var from = $('#from').val();
		var to = $('#to').val();
		if(from === '' || to === ''){
			alert('Debes escribir un origen y un destino para generar el mapa :(');
		}else{
			lauchMap(from, to);
			$('div.map_tools').show();
		}
	});
});

function showHideMarker(event){
	var split = (event.currentTarget.id).split('|');	
	if(event.currentTarget.checked){
		showMarker(split[0], split[1], split[2]);
	}else{
		hideMarker(split[0], split[1], split[2]);
	}
}