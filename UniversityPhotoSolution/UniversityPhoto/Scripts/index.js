;(function() {
	
	
	'use strict';
	
	
	// Scroll to sections
	var scrolltoOffset = 140,
		scrolltoDuration = 1000,
		scrollTo = 'easeInOutQuad';
	
	$('[data-scrollto]').click(function(e) {
		
		var destination = $($(this).attr('data-scrollto')).offset().top - scrolltoOffset;
		
		// allow user to cancel the scrolling animation and prevent jerking the screen around
		$('html, body').on('scroll mousedown DOMMouseScroll mousewheel keyup', function() {
			$('html, body').stop();
		});
		
		// animate the document's scrollTop property to the destination
		$('html, body').animate({ scrollTop: destination }, {
			duration: scrolltoDuration,
			easing: 'swing',
			complete: function() {
				$('html, body').off('scroll mousedown DOMMouseScroll mousewheel keyup');
			}
		});
		
		e.preventDefault();
		
	});
	
	
	// ----------------------------------------------------------------------------------------------------
	
	
	// Parallaxed background images
	
	/*
	var $doc = $(document),
		$win = $(window),
		$parallaxElements = $('.parallax');
	
	
	$doc.on('scroll', function(e) {
		
		var scrollTop = $doc.scrollTop(),
			scrollBottom = scrollTop + $win.height();
		
		$parallaxElements.each(function(i, element) {
			var $this			= $(element),
				elementTop		= $this.offset().top,
				elementBottom	= $this.offset().top + $this.height(),
				friction		= $this.data('friction') || .5,
				delta			= Math.round((scrollTop - elementTop) * friction);
			
			if (elementTop < scrollBottom && elementBottom > scrollTop) {
				$this.css('background-position', 'center ' + delta + 'px');
			}
		});
		
	});
	
	$doc.trigger('scroll');
	
	$('#section-1-carousel').on('slide.bs.carousel', function() {
		
		setTimeout(function() {
			$doc.trigger('scroll');
		}, 100);
		
	});
	*/
	
	
	// ----------------------------------------------------------------------------------------------------
	
	
	// Section 4 panels
	
	var $greekPanel		= $('.composite-panel.greek'),
		$greekControl	= $('.composite-panel.greek [data-subsection]'),
		
		$proPanel		= $('.composite-panel.professional'),
		$proControl		= $('.composite-panel.professional [data-subsection]');
	
	
	$('[data-subsection]').on('click', function(e) {
		
		var target = $(this).data('subsection');
		
		if (target == 'greek') {
			if (!$greekPanel.hasClass('active')) {
				$greekPanel.addClass('active').removeClass('disabled');
				$greekControl.attr('disabled', false);
				
				$proPanel.addClass('disabled').removeClass('active');
				$proControl.attr('disabled', true);
			} else {
				$greekPanel.removeClass('active');
				
				$proPanel.removeClass('disabled');
				$proControl.attr('disabled', false);
			}
		} else if (target == 'professional') {
			if (!$proPanel.hasClass('active')) {
				$greekPanel.addClass('disabled').removeClass('active');
				$greekControl.attr('disabled', true);
				
				$proPanel.addClass('active').removeClass('disabled');
				$proControl.attr('disabled', false);
			} else {
				$greekPanel.removeClass('disabled');
				$greekControl.attr('disabled', false);
				
				$proPanel.removeClass('active');
			}
		}
		
		e.preventDefault();
		
	});
	
	
})();