$(document).ready(function() {
	applicationSetup();
});

//Setup ran on intial load of application
function applicationSetup() {
	//Convert nomral select dropdown into select2 dropdown
	//Select2 dropdown features extra features and styling
	$("#location-select").select2();

	//Connect socket.io to server side
	//Uses socket.io client side script
	var socket = io.connect();
}