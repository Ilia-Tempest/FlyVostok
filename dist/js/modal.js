$(document).ready(function() {
$(function(){
	function showModal(id){
		$(document.body).addClass('is-open-modal');
		$(id).addClass('is-open');
		console.log(id);
	}
	function hideModals(){
		$(document.body).removeClass('is-open-modal');
		$('.modal').removeClass('is-open');
		
	}

	$(".header-button").on('click', function(e){
		console.log(e);
		showModal('#modal1');
		
 });
 $(".modal-close").click( function(){
    $(".modal").removeClass("is-open");
	$(document.body).removeClass('is-open-modal');
  });
	$(document).on('click', function(e){
		if (!(
		($(e.target).parents('.dialog').length)
		||	($(e.target).hasClass('dialog'))
		||	($(e.target).hasClass('header-button')))
		) {
			hideModals();
		}
	});

});

});