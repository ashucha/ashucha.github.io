$(() => {
	$("head").load("./templates/head.html");
	$("#navbar-placeholder").load("./templates/navbar.html");

	// Hide mobile modal on "Continue" button click
	$("#continue-btn").on("click", function () {
		$("#mobile-overlay-modal").hide();
	});
});
