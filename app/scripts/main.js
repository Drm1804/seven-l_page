$(document).ready(function () {
  $('.b-sec-part-box__cat').on('click', function () {
    $('.b-sec-part-box__cat').each(function () {
      $(this).removeClass('b-sec-part-box__cat--check');
      $(this).siblings('.b-sec-cat-box').removeClass('b-sec-cat-box--show')
    });
    $(this).toggleClass('b-sec-part-box__cat--check').siblings('.b-sec-cat-box')
      .toggleClass('b-sec-cat-box--show');
  });
  $('.b-sec-part-box-li').hover(function(){
    var num = $(this).attr('data-num');
    $('.b-sec-main-part-layer').each(function(){
      if($(this).attr('data-num') === num){
        $(this).css('background-color', '#ff5400')
      }
    })
  },
  function(){
    $('.b-sec-main-part-layer').each(function(){
      $(this).css('background-color', '#fff')
    })
  })

  $('.fancybox').fancybox();

});
