	$("#alert1").click(function(){
 	alert("You can't log in for now" );
 });
 		$("#alert2").click(function(){
 	alert("You can't sign up for now" );
 });

 	function send () {
	var name = $("#esem").val();
	var msg = $("#ekteb").val();

	if (name !== "string" || name === undefined) {
		alert( "Write a clear name " )
	}
	$("#ab").click(function(){
		send();
	})