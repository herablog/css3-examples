(function() {
    
    var cover = $('.dialog-cover');
    var frame = $('.dialog-frame');
    
    // show the dialog
    $('.showDialog').on('click', function() {
        cover.addClass('show');
        frame.css('margin-top', '-' + frame.height() / 2 + 'px');
        frame.addClass('show');
    });
    
    frame.on('click', function(e) {
       e.preventDefault(); 
    });
    
    // delete the dialog
    $('.dialog-actions .button').on('click', function() {
        cover.removeClass('show');
        frame.removeClass('show');
    });

})();
