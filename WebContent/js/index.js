$(document).ready(function(){
	$('#findTravelers').click(function(){
		var from = $('#from').val();
		var to = $('#to').val();
		if(from === '' || to === ''){
			alert('Debes escribir un origen y un destino para generar el mapa :(');
		}else{
			lauchMap(from, to);
			$('div.map_tools').show();
		}
	});
	
	$('#createRoute').click(function(){
		var from = $('#from').val();
		var to = $('#to').val();		
		createRoute(from, to);		
	});	
	
	$('#saveRoute').click(function(){
		var route = '';
		
		route += $('#from').val() + '|';
		var to = $('#to').val();	
		
		
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

function _clearTravelersList(){
	$('#closer_travelers li').each(function(){		
		$(this).remove();		
	});
}

function createRoute(from, to){	
	_createRoute(from, to);
}