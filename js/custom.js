
(function($){
  'use strict';
  // code here
  
 $('.menu-icon').click(function(){
	$('.menu-content').fadeIn();
});
 $('.close').click(function(){
	$('.menu-content').fadeOut();
});
  
})(jQuery);