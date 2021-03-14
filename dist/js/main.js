$(document).ready(function() {





var dateToday = new Date();    
$(function () {
    $(".date").datepicker({ 
        minDate: dateToday 
    });
    
});
   



   
  $('html').on('mousedown',".data-here", function(){
    $(this).datepicker();
  });




// Убавляем кол-во по клику
    $('.quantity_inner .bt_minus').click(function() {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
});
// Прибавляем кол-во по клику
$('.quantity_inner .bt_plus').click(function() {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
}); 
// Убираем все лишнее и невозможное при изменении поля
$('.quantity_inner .quantity').bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
        this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'));
    }    
}); 


const $block = $('.ticket-form__block').clone();

$('.bt_plus').click(function() {
  $('.ticket-first').before($block.clone());
});



var d = document;
  d.querySelector('.bt_minus').addEventListener('click', function(){
    var allDivs = d.querySelectorAll('.ticket-form__block'),
        indx = allDivs.length - 1;
    if(indx < 1) return false;
    allDivs[indx].parentNode.removeChild( allDivs[indx] );
}, false);


});