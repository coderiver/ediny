$(document).ready(function() {
	var subnav = $(".js-subnav");
	//$(".js-nav").find("li:first").next().addClass("js-show-subnav");
	$(".js-show-subnav").hover(function(){
		subnav.toggle(); 
	});
	subnav.hover(function(){
		subnav.toggle(); 
	});
});