var map = null;
var directionService = null;
var directionDisplay = null;

$(document).ready(function(){
	launchMap();	
});

function launchMap(){
	_initialize();
	_loadRoute();
}

function _initialize() {	
	var misOpciones = {
		zoom : 10,
		heading : 90,
		tilt : 45,
		mapTypeControl : true,
		mapTypeControlOptions : {
			style : google.maps.MapTypeControlStyle.DROPDOWN_MENU
		},
		zoomControl : true,
		zoomControlOptions : {
			style : google.maps.ZoomControlStyle.SMALL
		},
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};

	// Initialize variables
	map = new google.maps.Map(document.getElementById("map_canvas"), misOpciones);
	directionsService = new google.maps.DirectionsService();
	directionsDisplay = new google.maps.DirectionsRenderer();
	geocoder = new google.maps.Geocoder();	

	directionsDisplay.setMap(map);	
}

function _loadRoute(){
	var route = $('#savedRoute').val();
	var pieces = route.split('@@@');
	var email = pieces[0];
	
	var from = {};
	var to = {};
	var waypoints = [];
	
	for(var i = 1; i < pieces.length; i++){
		var properties = pieces[i].split('@@');
		switch(properties[0]){
		case 'from':
			from.location = properties[1];
			break;
		case 'to':
			to.location = properties[1];
			break;
		case 'waypoint':
			var waypoint = {
				location:  new google.maps.LatLng(properties[2], properties[3]),
				stopover: true
			};
			waypoints.push(waypoint);
			break;
		}
	}
	
	var request = {
			origin: from,
			destination: to,
			waypoints: waypoints,
			optimizeWaypoints: true,
			travelMode: google.maps.DirectionsTravelMode.DRIVING
			
	};
	
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
		}
	});	
}