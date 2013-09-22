var map = null;

function lauchMap(from, to){
	_initialize();
	_createRoute(from, to);
}

function _initialize(){
	var latlng = new google.maps.LatLng(43.354810,-5.851805);
	var misOpciones = {
		zoom: 10,
		heading: 90,
		tilt: 45,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions: {
		  style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		},
		zoomControl: true,
		zoomControlOptions: {
		  style: google.maps.ZoomControlStyle.SMALL
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), misOpciones);
}

function _createRoute(from, to){
	var request = {
		origin: from, 
		destination: to,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
		}
	});
}