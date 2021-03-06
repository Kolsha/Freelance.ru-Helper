var storage = chrome.storage.local;


var resetButton = document.querySelector('button.reset');
var submitButton = document.querySelector('button.submit');
var textarea = document.querySelector('textarea');


loadChanges();

submitButton.addEventListener('click', saveChanges);
resetButton.addEventListener('click', reset);

function saveChanges() {
    var costs = $('input#cost').map(function() {
        return this.value;
    }).get();

    var answers = $('textarea').map(function() {
        return this.value;
    }).get();


    storage.set({
        'answers': answers,
        'costs': costs,
        'post_after_select': $('#post_after_select').is(':checked')
    }, function() {
        message('Настройки сохранены');
    });
}

function appendAnswer(val) {
    $("#answers").append('<div class="form-inline"><p><textarea class="form-control" id="answer" rows=3 placeholder="Обращайтесь">' + val + 
        '</textarea> <button id="remove" class="btn btn-danger">Удалить</button></p></div>');
}

function appendCost(val) {
    $("#costs").append('<div class="form-inline"><p><input id="cost" class="form-control" type="number" value="' + val + 
        '" placeholder="1000"/> <button id="remove" class="btn btn-danger">Удалить</button></p></div>');
}

function loadChanges() {
    storage.get(['answers', 'costs', 'post_after_select'], function(items) {

        if (items.answers) {
            items.answers.forEach(function(item, i, arr) {
                appendAnswer(item);
            });
            message('Ответы загружены!');
        }

        if (items.costs) {
            items.costs.forEach(function(item, i, arr) {
                appendCost(item);
            });
            message('Стоимости загружены!');
        }

        if(items.post_after_select) {
            $('#post_after_select').attr('checked', 'checked');
        }

        bind_remove();
    });
}

function reset() {
    storage.remove(['answers', 'costs'], function(items) {
        message('Все удалено!');
        $('a#remove').parent().parent().remove('*');
    });

}

function message(msg) {
    var message = document.querySelector('.message');
    message.innerText = msg;
    setTimeout(function() {
        message.innerText = '';
    }, 3000);
}

function bind_remove() {
    $('button#remove').click(function(el) {
        message('Удалено!');
        $(el.target).parent().parent().remove('*');
    });
}


$('#add_answer').click(function() {
    appendAnswer('');
    bind_remove();
});


$('#add_cost').click(function() {
    appendCost('');
    bind_remove();
});