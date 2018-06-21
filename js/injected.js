$( document ).ready(function() {
    $('span#fh_answer').click(function(el) {
        $('#msg_body').val($(el.target).text());
        if($('#fh_answers').attr('post_after_select') == 'true') {
        	$('input:submit').click();
        }
    });


    $('span#fh_cost').click(function(el) {
        $('#cost').val($(el.target).text());
    });

});