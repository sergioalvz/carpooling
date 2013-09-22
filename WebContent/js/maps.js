var map = null;
var directionsService = null;
var directionsDisplay = null;
var geocoder = null;
var infowindow = null;
var travelerName = [ "Sergio", "Daniel", "Pablo", "Natalia", "Susana", "Juan", "Vanesa", "Gonzalo", "Lucía" ];
var markers = [];

var fromMarker = {
	title: '',
	location: null
};
var toMarker ={
	title: '',
	location: null
};

function lauchMap(from, to) {
	_initialize();
	_geocodingPoints(from, to);
	_generateRandomTravelers(from);
}

function showMarker(title, lat, lng) {
	if (map) {
		$.each(markers, function(index, value) {
			if (value.title === title
					&& value.position.lat().toString() === lat
					&& value.position.lng().toString() === lng) {
				value.setMap(map);
			}
		});
	}
}

function hideMarker(title, lat, lng) {
	if (map) {
		$.each(markers, function(index, value) {
			if (value.title === title
					&& value.position.lat().toString() === lat
					&& value.position.lng().toString() === lng) {
				value.setMap(null);
			}
		});
	}
}

function _initialize() {
	var latlng = new google.maps.LatLng(43.354810, -5.851805);
	var misOpciones = {
		zoom : 10,
		heading : 90,
		tilt : 45,
		center : latlng,
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
	infowindow = new google.maps.InfoWindow();

	directionsDisplay.setMap(map);
}

function _geocodingPoints(from, to) {
	_geocodingPoint(from, fromMarker);
	_geocodingPoint(to, toMarker);
}

function _geocodingPoint(point, myMarker) {
	geocoder.geocode({
		'address' : point
	}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			var marker = new google.maps.Marker({
				map : map,
				position : results[0].geometry.location,
				title : point
			});
			markers.push(marker);
			
			myMarker.title = point;
			myMarker.location = results[0].geometry.location;
			
		} else {
			alert("Lo sentimos, " + point + " no hemos podido localizarlo :(");
		}
	});
}

function _generateRandomTravelers(origin) {
	//clean the list of travelers
	_clearTravelersList();
	
	geocoder
			.geocode(
					{
						'address' : origin
					},
					function(results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							var latlng = results[0].geometry.location;
							map.setCenter(latlng);
							for ( var i = 0; i < 4; i++) {
								var marker = new google.maps.Marker({
									map : map,
									position : _generateRandomLatLong(latlng),
									title : _obtainRandomName()
								});

								google.maps.event.addListener(marker, 'click',
										function() {
											infowindow.setContent(this.title);
									 		infowindow.open(map, this);
										});

								markers.push(marker);

								$("#closer_travelers")
										.append(
												'<li><label><input type="checkbox" id="'
														+ (marker.title
																+ '|'
																+ marker.position
																		.lat()
																+ '|' + marker.position
																.lng())
														+ '" checked="true" onchange="showHideMarker(event)"/>'
														+ marker.title
														+ '</label></li>');
							}
						}
					});
}

function _generateRandomLatLong(latlng) {
	var radius = 1000; // meters
	var latitude = latlng.lat();
	var longitude = latlng.lng();

	// Convert radius from meters to degrees
	var radiusInDegrees = radius / 111000;

	var u = Math.random();
	var v = Math.random();
	var w = radiusInDegrees * Math.sqrt(u);
	var t = 2 * Math.PI * v;
	var x = w * Math.cos(t);
	var y = w * Math.sin(t);

	// Adjust the x-coordinate for the shrinking of the east-west distances
	var new_x = x / Math.cos(latitude);

	var foundLongitude = new_x + longitude;
	var foundLatitude = y + latitude;

	return new google.maps.LatLng(foundLatitude, foundLongitude);
}

function _obtainRandomName() {
	return travelerName[Math.floor(Math.random() * (travelerName.length - 1))];
}

function _createRoute(from, to) {
	
	var travelers = [];
	$.each(markers, function(index, value){
		if(value.map != null){
			travelers.push({
				location: value.position,
				stopover: true
			});
		}
	});
	
	var request = {
		origin: from,
		destination: to,
		waypoints: travelers,
		optimizeWaypoints: true,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
		
	};
	
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
		}
	});
}