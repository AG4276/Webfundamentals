$(document).ready(function(){
	alert("It's working");

	$("#image").click(function(){
		$("#image").hide();
	});

	$("#show").click(function(){
	$("#image").show();
	});

	$("#explode").click(function(){
		$("#image").toggle("explode", {pieces: 16}, 2000);
	});

	$("#fadeOut").click(function(){
		$("#image").fadeOut(5000);
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(5000);
	});
});