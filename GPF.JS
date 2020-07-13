$(document).ready(function(){
  $("#felsas").click(function(){
    $(".inin").fadeToggle("1000");
    $("#reset01").fadeToggle("1000");
  });
});
 $("#alert1").click(function(){
 	alert("You can't log in for now" );
 });
  $("#alert2").click(function(){
 	alert("You can't sign up for now" );
 });

$("#im1").hide();
$("#im2").hide();
$("#im3").hide();
$("#im4").hide();
$("#im5").hide();

function res () {
	var sex = $(".om").val();
	var tall = $(".tl").val();
	var skin = $(".bs").val();
	var fashion = $(".styl").val();
	console.log(sex);

	if ((sex === "Male" && tall === "2") && (skin === "Brown" && fashion === "Classic")) {
		$("#im2").hide();
		$("#im3").hide();
		$("#im1").fadeIn("slow");
		$("#im4").hide();
		$("#im5").hide();
	}
	else if ( (sex === "Male" && tall === "2" ) && (skin === "Light" && fashion === "Classic") ) {
		$("#im1").hide();
		$("#im3").hide();
		$("#im2").fadeIn("slow");
		$("#im4").hide();
		$("#im5").hide();
	}
	else if ( (sex === "Male" && tall === "2" ) && (skin === "Dark" && fashion === "Classic") ) {
		$("#im1").hide();
		$("#im2").hide();
		$("#im4").hide();
		$("#im3").fadeIn("slow");
		$("#im5").hide();
	}
	else if ( (sex === "Female" && tall === "1" ) && (skin === "Light" && fashion === "Classic") ) {
		$("#im1").hide();
		$("#im2").hide();
		$("#im3").hide();
		$("#im4").fadeIn("slow");
		$("#im5").hide();
	}
		else if ( (sex === "Female" && tall === "2" ) && (skin === "Brown" && fashion === "Classic") ) {
		$("#im1").hide();
		$("#im2").hide();
		$("#im3").hide();
		$("#im4").hide();
		$("#im5").fadeIn("slow");
	}
	else{
		$("#im1").hide()
		alert("We can't help you in this")
	}
}
	$("#sub").click(function(){
		res();
	})


	function reset(){
	var sex = $(".om").val();
	var tall = $(".tl").val();
	var skin = $(".bs").val();
	var fashion = $(".styl").val();

	$("#im2").hide();
	$("#im3").hide();
	$("#im1").hide();
	$("#im4").hide();
	$("#im5").hide();

	$(".om").val("no");
	$(".tl").val("no");
	$(".bs").val("no");
	$(".styl").val("no");

	}
	$("#reset01").click(function(){
		reset();
	})

