
$(document).ready(function(){
	
	$("#add").on("click", function(){
		var song = $("#song").val();
		console.log(song);

		var listItem = "<li>" + song + "<li>";
		console.log(listItem);

		$("#song-list").append(listItem);
		
		$("#song").val("");
	});

});