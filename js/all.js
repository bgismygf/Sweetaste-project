$(document).ready(function() {
	$(".showmenu").on('click', function(event) {
		event.preventDefault();
		$("body").toggleClass('open');
	});
	$(".index-product a i,.porduct-menu a i").click(function(event) {
		event.preventDefault();
		$(this).toggleClass('heart-solid');
	});
	$(".checkout-3-invoice a").click(function(event) {
		event.preventDefault();
		$(".checkout-3-invoice a").toggleClass('click-box');
		$(".box").toggleClass('click-box-block');

	});
});