$(document).ready(function(){
  $("#felsas").click(function(){
    $(".inin").slideToggle();
  });
});
 $(".alert1").click(function(){
 	alert("You can't log in or sign up for now" );
 });
$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});

$("#im1").hide()

function res (){
	var sex = $(".om").value;
	var tall = $(".tl").value;
	var skin = $(".bs").value;
	var fashion = $(".styl").value;

	if(sex === male && tall === 2 && skin === Brown && fashion === Classic){
		$("#im1").display()
	}
	$("#im1").hide()
}
	$("#sub").onclick = function(){
		res();
	}

