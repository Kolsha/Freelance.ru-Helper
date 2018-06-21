var storage = chrome.storage.local;

if (!$('#cost').val()) {
    $('#cost').val(1);
}

if (!$('#term').val()) {
    $('#term').val(1);
}

$(".wysibb").prepend('<div id="fh_answers" class="text-center"></div>');

function appendAnswer(val) {
    $("#fh_answers").append(' <span class="btn btn-default" id="fh_answer">' + val + '</span> ');
}


$("#cost").parent().next().html('');

function appendCost(val) {
    $("#cost").parent().next().append(' <span class="btn btn-default" id="fh_cost">' + val + '</span> ');
}

storage.get(['answers', 'costs', 'post_after_select'], function(items) {

    if(items.post_after_select) {
        $('#fh_answers').attr('post_after_select', 'true');
    }

    if (items.answers) {
        items.answers = items.answers.reverse();
        items.answers.forEach(function(item, i, arr) {
            appendAnswer(item);
        });

    }

    if (items.costs) {
        items.costs.forEach(function(item, i, arr) {
            appendCost(item);
        });

    }
});


$.get(chrome.extension.getURL('/js/injected.js'),
    function(data) {
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.innerHTML = data;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
);