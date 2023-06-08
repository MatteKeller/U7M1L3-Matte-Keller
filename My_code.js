$(document).ready(function() {
	
$("h1").mousedown(function(){
	$(this).css("background-color","green");
});
$("h1").mouseleave(function(){
	$(this).css("background-color","blue");
	$("*").unbind("mouseleave");
});

});