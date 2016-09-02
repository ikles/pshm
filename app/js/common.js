$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});


	$(".form form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".form form").trigger("reset");
		});
		return false;
	});

	$('.order-call, .footer-call').click(function() {
		$('.popup form, .overlay').fadeIn();
	});

	$('.close, .overlay').click(function() {
		$('.popup form, .overlay').fadeOut();
	});

	$('a[href^="#"]').click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 1100 );
		return false;
	});

	$('#thumbnails a').lightBox();

}); //ready