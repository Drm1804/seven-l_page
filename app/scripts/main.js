$(document).ready(function(){
    $('.b-sec-part-box__cat').on('click', function(){
        $('.b-sec-part-box__cat').each(function(){
            $(this).removeClass('b-sec-part-box__cat--check');
            $(this).siblings('.b-sec-cat-box').removeClass('b-sec-cat-box--show')
        });
        $(this).toggleClass('b-sec-part-box__cat--check').siblings('.b-sec-cat-box')
            .toggleClass('b-sec-cat-box--show');
    })
});