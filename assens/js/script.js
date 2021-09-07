/*

  1. Pseudo-class root
  2. Navbar
  3. Jumbotron
  4. About
  5. Skill
  6. Project
  7. Certificate
  8. Gallery
  9. Hobby
  10. Community and support
  11. Contact
  12. Footer
  13. Scroll top
  14. AOS

*/

/*
  ========================================
    2. Navbar
  ========================================
*/

$(function() {

	let navMain = $(".navbar-collapse");
	navMain.on("click", ".nav-item:not([data-toggle])", null, function () {
		navMain.collapse('hide');

	});
});

$(document).ready(function() {

	$(".navbar-nav li.nav-item").addClass("link")
	$(".navbar-nav li.nav-item .nav-link").addClass("text")

});

$(document).ready(function() {
	$(window).scroll(function() {

		if ($(this).scrollTop() < $("#jumbotron").height() - 50) {
			$(".navbar").removeClass("bg-light");
			$(".navbar").removeClass("navbar-light");
			$(".navbar").addClass("navbar-dark");
			$(".navbar-nav").addClass("navbar-nav-color");
			$(".nav-link").addClass("nav-link-color");
			$(".navbar").removeClass("navbar-style-1");
		} else {
			$(".navbar").addClass("bg-light");
			$(".navbar").addClass("navbar-light");
			$(".navbar").removeClass("navbar-dark");
			$(".navbar-nav").removeClass("navbar-nav-color");
			$(".nav-link").removeClass("nav-link-color");
			$(".navbar").addClass("navbar-style-1");
		}

	});
});

$(function() {
	$.scrollIt({
		upKey: 38,
		// key code to navigate to the next section
		downKey: 40,
		// key code to navigate to the previous section
		easing: 'easeInOutExpo',
		// the easing function for animation
		scrollTime: 600,
		// how long (in ms) the animation takes
		activeClass: 'active',
		// class given to the active nav element
		onPageChange: null,
		// function(pageIndex) that is called when page is changed
		topOffset: -55
	});
});


let links = document.getElementsByClassName('link')
for (let i = 0; i <= links.length; i++)
	addClass(i)


function addClass(id) {
	setTimeout(function() {
		if (id > 0) links[id-1].classList.remove('hover')
		links[id].classList.add('hover')
	},
		id*750)
}


/*
  ========================================
    3. Jumbotron
  ========================================
  */

$(document).ready(function() {
	$(window).scroll(function() {

		if ($(this).scrollTop() > $('#jumbotron').height()/1.5 ) {
			$('.jumbotron .scroll-down').css({
				'opacity': '0'
			});
			
		} else {
			$('.jumbotron .scroll-down').css({
				'opacity': '1'
			});
			
		}

	});
});

$(document).ready(function() {
	$(window).scroll(function() {

		if ($(this).scrollTop() < $('#jumbotron').height()/4 ) {
			$('.jumbotron h1, .jumbotron h2, .jumbotron .jumb-img-1').css({
				'opacity': '1'
			});
			
		} else {
			$('.jumbotron h1, .jumbotron h2, .jumbotron .jumb-img-1').css({
				'opacity': '0'
			});
		}

	});
});

/*
  ========================================
    4. about
  ========================================
  */

$(document).ready(function() {

	$(".about .about-con").addClass("container");
	$(".about .about-1").addClass("row");
	$(".about .about-2").addClass("row");
	$(".about .about-3").addClass("row");
	$(".about .about-3 .about-3-1").addClass("col-sm-4");
	$(".about .about-3 .about-3-2").addClass("col-sm-4");
	$(".about .about-3 .about-3-3").addClass("col-sm-4");
	$(".about .about-3 .about-3-1 .about-3-1-1").addClass("card");
	$(".about .about-3 .about-3-2 .about-3-2-1").addClass("card");
	$(".about .about-3 .about-3-3 .about-3-3-1").addClass("card");
	$(".about .about-3 .about-3-1 .about-3-1-1 p").addClass("text-center");
	$(".about .about-3 .about-3-2 .about-3-2-1 p").addClass("text-center");
	$(".about .about-3 .about-3-3 .about-3-3-1 p").addClass("text-center");

});


/*
  ========================================
    5. Skill
  ========================================
  */

$(document).ready(function() {

	$('.skill-con').addClass('container')
	$('.skill-1').addClass('row text-center')
	$('.skill-2').addClass('row')

});

(function() {

	var SkillsBar = function(bars) {
		this.bars = document.querySelectorAll(bars);
		if (this.bars.length > 0) {
			this.init();
		}
	};

	SkillsBar.prototype = {
		init: function() {
			var self = this;
			self.index = -1;
			self.timer = setTimeout(function() {
				self.action();
			}, 500);


		},
		select: function(n) {
			var self = this,
			bar = self.bars[n];

			if (bar) {
				var width = bar.parentNode.dataset.percent;

				bar.style.width = width;
				bar.parentNode.classList.add("complete");
			}
		},
		action: function() {
			var self = this;
			self.index++;
			if (self.index == self.bars.length) {
				clearTimeout(self.timer);
			} else {
				self.select(self.index);
			}

			setTimeout(function() {
				self.action();
			}, 500);
		}
	};

	window.SkillsBar = SkillsBar;

})();



(function() {

	document.addEventListener("DOMContentLoaded", function() {

		var skills = new SkillsBar(".skillbar-bar");

	});

})();


/*
  ========================================
    6. Project
  ========================================
  */

$(document).ready(function() {

	$('.project .project-con').addClass('container');
	$('.project .project-1').addClass('row');
	$('.project .project-2').addClass('row');
	$('.project .project-2 .project-2-1').addClass('col-sm-6');
	$('.project .project-2 .project-2-1 .project-2-1-1').addClass('card');
	$('.project .project-2 .project-2-1 .project-2-1-1 .project-2-1-1-2').addClass('card-body');
	$('.project .project-2 .project-2-1 .project-2-1-1 .project-2-1-1-2 .project-2-1-1-2-1').addClass('card-title');
	$('.project .project-2 .project-2-1 .project-2-1-1 .project-2-1-1-2 .project-2-1-1-2-2').addClass('card-text');
	$('.project .project-2 .project-2-1 .project-2-1-1 img').addClass('card-img-top');
	$('.project .project-2 .project-2-1 .project-2-1-1 a.project-button').addClass('btn btn-warning btn-md');

});


/*
  ========================================
    7. Certificate
  ========================================
  */

$(document).ready(function() {

	$('.cert .cert-con').addClass('container');
	$('.cert .cert-1').addClass('row');
	$('.cert .cert-2').addClass('row');
	$('.cert .cert-2 .cert-2-1').addClass('col-sm-4');
	$('.cert .cert-2 .cert-2-1 .cert-2-1-1 img').addClass('img-responsive');

});

/*
  ========================================
    8. Gallery
  ========================================
  */

$(document).ready(function () {

	$('.gallery .gallery-con').addClass('container');
	$('.gallery .gallery-1').addClass('row');
	$('.gallery .gallery-2').addClass('row');
	$('.gallery .gallery-2 .gallery-2-1').addClass('col-sm-4');


});


/*
  ========================================
    9. Hobby
  ========================================
  */

$(document).ready(function() {

	$('.hobby .hobby-con').addClass('container');
	$('.hobby .hobby-1').addClass('row');
	$('.hobby .hobby-2').addClass('row');
	$('.hobby .hobby-2 .hobby-2-1').addClass('col-sm-6');

});


/*
  ========================================
    10. Community
  ========================================
  */

$(document).ready(function() {

	$('.community-con').addClass('container');
	$('.community-1').addClass('row');
	$('.community-2').addClass('row');

});


/*
  ========================================
  11. Contact
  ========================================
  */

$(document).ready(function() {

	$('.contact .contact-con').addClass('container');
	$('.contact .contact-1').addClass('row');
	$('.contact .contact-2').addClass('row');
	$('.contact .contact-2 .contact-2-1').addClass('col-sm-6');
	$('.contact .contact-2 .contact-2-1 .contact-card').addClass('card');
	$('.contact .contact-2 .contact-2-1 .contact-card img').addClass('card-img');
	$('.contact .contact-2 .contact-2-1 .contact-card .contact-card-img-overlay').addClass('card-img-overlay');
	$('.contact .contact-2 .contact-2-1 .contact-card .contact-card-img-overlay h5').addClass('card-title');
	$('.contact .contact-2 .contact-2-1 .contact-card .contact-card-img-overlay ul').addClass('list-group list-group-flush');
	$('.contact .contact-2 .contact-2-1 .contact-card .contact-card-img-overlay ul li a').addClass('list-group-item');
	$('.contact .contact-2 .contact-2-2').addClass('col-sm-6');
	$('.contact .contact-2 .contact-2-2 .contact-card').addClass('card');
	$('.contact .contact-2 .contact-2-2 .contact-card form').addClass('needs-validation');
	$('.contact .contact-2 .contact-2-2 .contact-card ul').addClass('list-group list-group-flush');
	$('.contact .contact-2 .contact-2-2 .contact-card ul li').addClass('list-group-item form-floating');
	$('.contact .contact-2 .contact-2-2 .contact-card ul li input').addClass('form-control');
	$('.contact .contact-2 .contact-2-2 .contact-card ul li textarea').addClass('form-control');
	$('.contact .contact-2 .contact-2-2 .contact-card ul li button').addClass('btn btn-md float-end');
	$('.contact .contact-2 .contact-2-2 .contact-card ul li .form-check input').addClass('form-check-input');
	$('.contact .contact-2 .contact-2-2 .contact-card ul li .form-check label').addClass('form-check-label');

});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
	.forEach(function (form) {
		form.addEventListener('submit', function (event) {
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			}

			form.classList.add('was-validated')
		},
			false)
	})
})();


/*
  ========================================
  11. Contact
  ========================================
*/

$(document).ready(function() {

	$('footer .footer-con').addClass('container')
	$('footer .footer-1').addClass('row')
	$('footer .footer-2').addClass('row')
	$('footer .footer-3').addClass('row')

});


/*
  ========================================
  13. Scroll top
  ========================================
*/


window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > $('.jumbotron').height() || document.documentElement.scrollTop > 75) {
		$('.backtop').css({
			'display': 'block'
		});
	} else {
		$('.backtop').css({
			'display': 'none'
		});
	}
};

$('.backtop').on('click', function() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


/*
  ========================================
    13. AOS
  ========================================
*/

(function() {

	AOS.init();

})();


$(document).ready(function() {
	$(".preloader").fadeOut();
})