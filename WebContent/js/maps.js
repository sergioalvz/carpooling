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


/* **************************************************************************************** */
/*                                    LAYER MANAGEMENT                                      */
/* **************************************************************************************** */
var overlayWMSAeropuerto;
var overlayWMS_CP;
var overlayWMSViasTren;
var trafficLayer;
var radaresLayer;
var weatherLayer;
var cloudLayer;


// Capa WMS Externo Aeropuertos
var WMS_URL = 'http://www.ign.es/wms-inspire/ign-base?';
var WMS_Layers = 'Aeropuertos';
var TileWMS = function(coord, zoom) {
	var proj = map.getProjection();
	var zfactor = Math.pow(2, zoom);
	var top = proj.fromPointToLatLng(new google.maps.Point(coord.x * 256
			/ zfactor, coord.y * 256 / zfactor));
	var bot = proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * 256
			/ zfactor, (coord.y + 1) * 256 / zfactor));
	var bbox = top.lng() + "," + bot.lat() + "," + bot.lng() + "," + top.lat();

	var myURL = WMS_URL + "SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A4326&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=TRUE";
	myURL += "&LAYERS=" + WMS_Layers;
	myURL += "&BBOX=" + bbox;
	return myURL;
};

// Capa WMS Externo Codigos postales
var WMS_URL_CP = 'http://www.cartociudad.es/wms/CARTOCIUDAD/CARTOCIUDAD?';
var WMS_Layers_CP = 'CodigoPostal';
var markersArray_CP = [];
var TileWMS_CP = function(coord, zoom) {
	var proj_CP = map.getProjection();
	var zfactor_CP = Math.pow(2, zoom);
	var top_CP = proj_CP.fromPointToLatLng(new google.maps.Point(coord.x * 256
			/ zfactor_CP, coord.y * 256 / zfactor_CP));
	var bot_CP = proj_CP.fromPointToLatLng(new google.maps.Point((coord.x + 1)
			* 256 / zfactor_CP, (coord.y + 1) * 256 / zfactor_CP));
	var bbox_CP = top_CP.lng() + "," + bot_CP.lat() + "," + bot_CP.lng() + ","
			+ top_CP.lat();

	var myURL_CP = WMS_URL_CP + "SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A4326&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=TRUE";
	myURL_CP += "&LAYERS=" + WMS_Layers_CP;
	myURL_CP += "&BBOX=" + bbox_CP;
	return myURL_CP;
};

// Capa WMS Vias Tren
var WMS_URLPropio = 'http://156.35.98.26:7070/cgi-bin/cursoIDE?';
var WMS_LayersPropio = 'Railways';
var markersArrayPropio = [];
var TileWMSPropio = function(coord, zoom) {
	var projPropio = map.getProjection();
	var zfactorPropio = Math.pow(2, zoom);
	var topPropio = projPropio.fromPointToLatLng(new google.maps.Point(coord.x
			* 256 / zfactorPropio, coord.y * 256 / zfactorPropio));
	var botPropio = projPropio.fromPointToLatLng(new google.maps.Point(
			(coord.x + 1) * 256 / zfactorPropio, (coord.y + 1) * 256
					/ zfactorPropio));
	var bboxPropio = topPropio.lng() + "," + botPropio.lat() + ","
			+ botPropio.lng() + "," + topPropio.lat();

	var myURLPropio = WMS_URLPropio + "SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A4326&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=TRUE";
	myURLPropio += "&LAYERS=" + WMS_LayersPropio;
	myURLPropio += "&BBOX=" + bboxPropio;
	return myURLPropio;
};

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

	// Extern WMS - Airports
	var overlayOptions = {
		getTileUrl : TileWMS,
		tileSize : new google.maps.Size(256, 256)
	};
	overlayWMSAeropuerto = new google.maps.ImageMapType(overlayOptions);
	

	// Extern WMS - ZIP Codes
	var overlayOptions_CP = {
		getTileUrl : TileWMS_CP,
		tileSize : new google.maps.Size(256, 256)
	};
	overlayWMS_CP = new google.maps.ImageMapType(overlayOptions_CP);
	

	// WMS - Train
	var overlayOptionsWMSPropio = {
		getTileUrl : TileWMSPropio,
		tileSize : new google.maps.Size(256, 256)
	};
	overlayWMSViasTren = new google.maps.ImageMapType(overlayOptionsWMSPropio);
	

	// Traffic layer
	trafficLayer = new google.maps.TrafficLayer();	

	// KML Layer for radars
	radaresLayer = new google.maps.KmlLayer('http://156.35.95.46/miw/RadaresDGT.kml');

	// Weather layer
	weatherLayer = new google.maps.weather.WeatherLayer({
		temperatureUnits : google.maps.weather.TemperatureUnit.CELSIUS
	});	

	// Cloud layer
	cloudLayer = new google.maps.weather.CloudLayer();	
	
	optionsLayers();
}

function rotate90() {
	var heading = map.getHeading() || 0;
	map.setHeading(heading + 90);
}

function autoRotate() {
	if (map.getTilt() != 0) {
		window.setInterval(rotate90, 3000);
	}
}

function optionsLayers() {
	if(document.layersMap.tiempo.checked == false){		
		weatherLayer.setMap(null);
	}else{
		weatherLayer.setMap(map);
	}
	
	if(document.layersMap.nubes.checked == false){		
		cloudLayer.setMap(null);
	}else{
		cloudLayer.setMap(map);
	}
	
	if(document.layersMap.trafico.checked == false){		
		trafficLayer.setMap(null);
	}else{
		trafficLayer.setMap(map);
	}
	
	if(document.layersMap.kml.checked == false){		
		radaresLayer.setMap(null);
	}else{
		radaresLayer.setMap(map);
	}
	
	if(document.layersMap.wmspropio.checked == true){
		map.overlayMapTypes.setAt(0,overlayWMSViasTren);
	}else{
		map.overlayMapTypes.setAt(0,null);
	}
	
	if(document.layersMap.wmsexterno.checked == true){
		map.overlayMapTypes.setAt(1,overlayWMSAeropuerto);
	}else{
		map.overlayMapTypes.setAt(1,null);
	}
	
	if(document.layersMap.wmsexternoCP.checked == true){
		map.overlayMapTypes.setAt(2,overlayWMS_CP);
	}else{
		map.overlayMapTypes.setAt(2,null);
	}
}