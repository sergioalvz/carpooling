$(document).ready(function(){
	
	var from = "";
	var to = "";
	
	$('#from').keypress(function(event){
		if(event.keyCode == 13){
			// if user press enter
			if($('#from').val() != ''){
				from = $('#from').val();
				//TODO launch event for appearing the destination input
				$('#to').show();
				$('#to').animate({
				    left: 100
				  }, {
				    duration: 1000,
				    step: function( now, fx ){
				      $('#to').css( "left", now );
				    }
				  });
			}
		}
	});
	
	$('#to').keypress(function(event){
		if(event.keyCode == 13){
			// if user press enter
			if($('#to').val() != ''){
				to = $('#to').val();
				//TODO launch the map and make the request for generating the route
			}
		}
	});	
});