var hbState = 0;

var currentPageId = '';

function toggleHB(pageid){
  if(hbState ==0){
     showMenu(pageid);
	 hbState = 1;
	 currentPageId = pageid;
  }else{
     hideMenu(pageid);
	 hbState = 0;
	 currentPageId = '';
  }
  
}
//////////////////////////////////////////////////////////////////////////////
function gotoHomePage(){

   jQuery('.mobileNav').css('display', 'none');
   
   //$.mobile.navigate("#main-page");
   $.mobile.changePage( "#main-page", { transition: "slide", changeHash: false, reverse: true });
   
   jQuery('#'+currentPageId).unbind('touchmove');
   
	//set margin for the whole container with a jquery UI animation
	jQuery('#'+currentPageId).animate({"marginLeft": ["0px", 'easeOutExpo']}, {
		duration: 10
	});     
	
	hbState = 0;
	currentPageId = '';	
}
//////////////////////////////////////////////////////////////////////////////
function showMenu(pageid){

	var contentWidth = jQuery('#'+pageid).width();
	jQuery('#'+pageid).css('width', contentWidth);

	 //disable all scrolling on mobile devices while menu is shown
	jQuery('#'+pageid).bind('touchmove', function(e){e.preventDefault()});

	jQuery('.mobileNav').css('display', 'block');
   	
	//set margin for the whole container with a jquery UI animation
	jQuery('#'+pageid).animate({"marginLeft": ["-80%", 'easeOutExpo']}, {
		duration: 500
	});
	
}

function hideMenu(pageid){

	var contentWidth = jQuery('#'+pageid).width();
	jQuery('#'+pageid).css('width', contentWidth);
	
	jQuery('.mobileNav').css('display', 'none');

	 //disable all scrolling on mobile devices while menu is shown
	jQuery('#'+pageid).unbind('touchmove');

	//set margin for the whole container with a jquery UI animation
	jQuery('#'+pageid).animate({"marginLeft": ["0px", 'easeOutExpo']}, {
		duration: 500
	});  
}