/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var chatAnimate = (function() {

	var docElem = document.documentElement,
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		console.log($("#content-container"));
		$("#content-container").css( "display", "none" );
		
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		console.log($("#content-container"));
		$("#content-container").css( "display", "none" );
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$("#content-container").css( "display", "none" );
		}
		else {
			$("#content-container").css( "display", "none" );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();