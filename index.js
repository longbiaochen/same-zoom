// Felix

// global zoom level
var Z = 12;
// active map signal
var A = 0;

function initialize() {

	// create maps
	var map_left = new google.maps.Map(document.getElementById('map-left'), {
		zoom : Z,
		center : new google.maps.LatLng(48.8567, 2.3508) // Paris
	});

	var map_right = new google.maps.Map(document.getElementById('map-right'), {
		zoom : Z,
		center : new google.maps.LatLng(39.9, 116.4) // Hangzhou
	});

	// add zoom listeners
	google.maps.event.addListener(map_left, 'zoom_changed', function(e) {

		if (A == 0) {
			// mouse in left
			Z = map_left.getZoom();
			map_right.setZoom(Z);
			$('#zoom-level').html('Zoom Level: ' + Z);

		}
	});
	google.maps.event.addListener(map_right, 'zoom_changed', function(e) {

		if (A == 1) {
			// mouse in right
			Z = map_right.getZoom();
			LA = 0;
			map_left.setZoom(Z);
			$('#zoom-level').html('Zoom Level: ' + Z);

		}
	});

	$('#zoom-level').html('Zoom Level: ' + Z);

	var W = $('body').width();
	$("body").mousemove(function(event) {
		A = Math.round(event.pageX / W);
	});

}

google.maps.event.addDomListener(window, 'load', initialize);
