$(function () {
	$(".header").height($(window).height());
	$(window).resize(function () {
		$(".header").height($(window).height());
		$(".bxslider").each(function () {
			$(this).css(
				"paddingTop",
				($(window).height() - $(".bxslider div").height()) / 2
			);
		});
	});
	// navbar active link
	$(".links li a").click(function () {
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
	//----- header slider
	$(document).ready(function () {
		$(".bxslider").bxSlider();
	});
	$(".bxslider").each(function () {
		$(this).css(
			"paddingTop",
			($(window).height() - $(".bxslider div").height()) / 2
		);
	});
	// scroll to sections
	$(".links li a").click(function () {
		$("html, body").animate(
			{
				scrollTop: $("#" + $(this).data("value")).offset().top,
			},
			1000
		);
	});
	// Testim Slider
	$(
		(function testimSlider() {
			$(".slider .active").each(function () {
				if (!$(this).is(":last-child")) {
					$(this)
						.delay("2000")
						.fadeOut(1000, function () {
							$(this).removeClass("active").next().addClass("active").fadeIn();
							testimSlider();
						});
				} else {
					$(this)
						.delay("2000")
						.fadeOut(1000, function () {
							$(this).removeClass("active");
							$(".slider div").eq(0).addClass("active").fadeIn();
							testimSlider();
						});
				}
			});
		})()
	);
	// Project
	let proLi = $(".project .list li");
	$(proLi).each(function () {
		$(proLi).click(function () {
			$(this).addClass("active").siblings().removeClass("active");
			if (!$(this).is(":first-child")) {
				$("div[data-value=" + $(this).data("value") + "]").show(500);
				$(".gallery div[data-value!=" + $(this).data("value") + "]").hide(500);
			}
			if ($(this).is(":first-child")) {
				$(".gallery div[data-value]")
					.show(500)
					.children()
					.css("display", "block");
			}
		});
	});
	//
	$(".header .menu").click(function () {
		$(".header .links").toggleClass("open");
	});
});
