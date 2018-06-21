var storage = chrome.storage.local;

if (!$('#cost').val()) {
    $('#cost').val(1);
}


function appendAnswer(val) {
    $(".wysibb").prepend(' <span class="btn btn-default" id="fh_answer">' + val + '</span> ');
}


$("#cost").parent().next().html('');

function appendCost(val) {

    $("#cost").parent().next().append(' <span class="btn btn-default" id="fh_cost">' + val + '</span> ');
}

storage.get(['answers', 'costs'], function(items) {
    if (items.answers) {
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
        document.getElementsByTagName("body")[0].setAttribute("onLoad", "injected_main();");
    }
);