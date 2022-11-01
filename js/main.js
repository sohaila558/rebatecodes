(function($){"use strict";
 
   
/*************************************** Nav ******************************************************/
	jQuery(".navigation  ul li ul").parent("li").addClass("parent-list");
	jQuery(".parent-list").find("a:first").append("<span class='menu-nav-arrow'><i class='fa fa-chevron-circle-down'></i></span>");

/********************************** saerch *******************************************************/
	
	jQuery(".header-search-a").click(function (){
		var header_search = jQuery(this);
		if (header_search.parent().hasClass("header-search-active")) {
			header_search.parent().removeClass("header-search-active");
			header_search.parent().find(".header-search-form").slideUp(200);
		}else {
			header_search.parent().addClass("header-search-active");
			header_search.parent().find(".header-search-form").slideDown(200);
		}
	});		
/********************************** bxslider *******************************************************/
	
	
	
	jQuery(".bxslider-slide > ul").bxSlider({easing: "ease-in-out",tickerHover: true,slideWidth: 1170,adaptiveHeightSpeed: 5000,moveSlides: 1,maxSlides: 1,auto: false});



/********************************* professors **************************************************/
             
  $('.material-card > .mc-btn-action').click(function () {
            var card = $(this).parent('.material-card');
            var icon = $(this).children('i');
            icon.addClass('fa-spin-fast');

            if (card.hasClass('mc-active')) {
                card.removeClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-arrow-left')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-bars');

                }, 800);
            } else {
                card.addClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-bars')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-arrow-left');

                }, 800);
            }
        });           

/********************************** progressbar *******************************************/
	
	if (jQuery(".progressbar-percent").length) {
		jQuery(".progressbar-percent").each(function(){
			var $this = jQuery(this);
			var percent = $this.attr("data-percent");
			$this.bind("inview", function(event, isInView, visiblePartX, visiblePartY) {
				if (isInView) {
					$this.animate({ "width" : percent + "%"}, percent*20);
				}
			});
		});
	}
	
/******************************* Accordion & Toggle **********************************************/
	
	jQuery(".accordion .accordion-title").each(function(){
		jQuery(this).click(function() {
			if (jQuery(this).parent().parent().hasClass("toggle-accordion")) {
				jQuery(this).parent().find("li:first .accordion-title").addClass("active");
				jQuery(this).parent().find("li:first .accordion-title").next(".accordion-inner").addClass("active");
				jQuery(this).toggleClass("active");
				jQuery(this).next(".accordion-inner").slideToggle().toggleClass("active");
				jQuery(this).find("i").toggleClass("fa-minus").toggleClass("fa-plus");
			}else {
				if (jQuery(this).next().is(":hidden")) {
					jQuery(this).parent().parent().find(".accordion-title").removeClass("active").next().slideUp(200);
					jQuery(this).parent().parent().find(".accordion-title").next().removeClass("active").slideUp(200);
					jQuery(this).toggleClass("active").next().slideDown(200);
					jQuery(this).next(".accordion-inner").toggleClass("active");
					jQuery(this).parent().parent().find("i").removeClass("fa-plus").addClass("fa-minus");
					jQuery(this).find("i").removeClass("fa-minus").addClass("fa-plus");
				}
			}
			return false;
		});
	});
             

	
	/********************************** Count To *******************************************************/

    $('.our_stats').waypoint(function () {
        "use strict";
        // first timer
        $('.timer1').countTo({
            from: 0, // the number you want to start
            to: 2056, // the number you want to reach
            speed: 2000,
            refreshInterval: 100

        });
        // second timer
        $('.timer2').countTo({
            from: 0, // the number you want to start
            to: 3025, // the number you want to reach
            speed: 2500,
            refreshInterval: 50

        });
        // third timer
        $('.timer3').countTo({
            from: 0, // the number you want to start
            to: 2500, // the number you want to reach
            speed: 2000,
            refreshInterval: 10
        });
        // fourth timer
        $('.timer4').countTo({
            from: 0, // the number you want to start
            to: 3456, // the number you want to reach
            speed: 4000,
            refreshInterval: 10


        });
    }, {offset: 500});

 	
	
	
	
/********************************** Back to top (go up)**********************************************/
	
	jQuery(window).scroll(function () {
		if(jQuery(this).scrollTop() > 300 ) {
			jQuery(".go-up").css("right","20px");
		}else {
			jQuery(".go-up").css("right","-60px");
		}
	});
	jQuery(".go-up").click(function(){
		jQuery("html,body").animate({scrollTop:0},1000);
		return false;
	});
	

/********************************** Nice Scroll ******************************************************/
	
	jQuery("html").niceScroll({
		scrollspeed: 60,
		mousescrollstep: 38,
		cursorwidth: 6,
		cursorborder: 0,
		cursorcolor: '#0a9fd8',
		autohidemode: false,
		zindex: 9999999,
		horizrailenabled: false,
		cursorborderradius: 0,
	});
             

})(jQuery);