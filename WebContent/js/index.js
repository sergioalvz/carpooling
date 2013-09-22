$(document).ready(function(){
	$('#findTravelers').click(function(){
		var from = $('#from').val();
		var to = $('#to').val();
		if(from === '' || to === ''){
			alert('Debes escribir un origen y un destino para generar el mapa :(');
		}else{
			lauchMap(from, to);
			$('div.map_tools').show();
			$('#printPanel').show();
		}
	});
	
	$('#createRoute').click(function(){
		var from = $('#from').val();
		var to = $('#to').val();		
		createRoute(from, to);		
	});	
	
	$('#saveRoute').click(function(){
		if($('#user_mail').val() === ''){
			alert('¡Debe indicar un email a su petición para guardar la ruta!');
		}else{		
			var route = '';
			
			route += $('#user_mail').val() + '@@@';
			route += 'from' + '@@' + fromMarker.title + '@@' + fromMarker.location.lat() + '@@' + fromMarker.location.lng() + '@@@';
			route += 'to' + '@@' + toMarker.title + '@@' + toMarker.location.lat() + '@@' + toMarker.location.lng() + '@@@';		
			
			for(var i = 0; i < markers.length; i++){
				var marker = markers[i];
				if(marker.map){
					route += 'waypoint' + '@@' + marker.title + '@@';
					route += marker.position.lat() + '@@' + marker.position.lng() + '@@@';
				}
			}		
			
			$('#savedRoute').val(route);
			$('input.hidden').click(); //There is only hidden the Submit button input
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

function _clearTravelersList(){
	$('#closer_travelers li').each(function(){		
		$(this).remove();		
	});
}

function createRoute(from, to){	
	_createRoute(from, to);
}