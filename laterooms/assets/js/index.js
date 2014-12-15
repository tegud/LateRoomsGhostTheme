$(document).ready(function(){

	$('pre').addClass('prettyprint');
	coverImages();
});

var coverImages = function coverImages() {
	var mainImage = $('img[alt="main-image"]');

	if ( mainImage.length > 0){
		mainImage.remove();
		var mainImageSource = mainImage.attr('src');
		$('#post-header').css('background-image','url('+mainImageSource+')');
		$('#post-header').addClass('active');
	} else {
		$('#post-header').addClass('active');
	}	
}