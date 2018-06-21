function injected_main() {
    $('span#fh_answer').click(function(el) {
        $('#msg_body').val($(el.target).text());
    });


    $('span#fh_cost').click(function(el) {
        $('#cost').val($(el.target).text());
    });

}