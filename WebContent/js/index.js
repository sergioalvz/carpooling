$(document).ready(function(){
	var from = '';
	var to = '';
	
	$('#generateRouteButton').click(function(){
		from = $('#from').val();
		to = $('#to').val();
		if(from === '' || to === ''){
			//TODO generate the route.
			alert('TODO BLANCO NO!');
		}
	});
});