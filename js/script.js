$(document).ready(function() {
		$(".faq-each").click(function() {
			$(this).find(".answer").slideToggle(400);
		});
});