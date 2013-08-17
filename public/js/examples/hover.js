(function() {

    $('.list-link').bind('touchstart', function(){
      $(this).addClass("tap");
    });

    $('.list-link').bind('touchend', function(){
      $(this).removeClass("tap");
    });
    
})();
