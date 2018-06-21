var storage = chrome.storage.local;


var resetButton = document.querySelector('button.reset');
var submitButton = document.querySelector('button.submit');
var textarea = document.querySelector('textarea');


loadChanges();

submitButton.addEventListener('click', saveChanges);
resetButton.addEventListener('click', reset);

function saveChanges() {
    var costs = $('input').map(function() {
        return this.value;
    }).get();

    var answers = $('textarea').map(function() {
        return this.value;
    }).get();


    storage.set({
        'answers': answers,
        'costs': costs
    }, function() {
        message('Настройки сохранены');
    });
}

function appendAnswer(val) {
    $("#answers").append('<div><p><textarea id="answer" rows=3 placeholder="Обращайтесь">' + val + '</textarea> <a href="#" id="remove">Удалить</a><hr /></p></div>');
}

function appendCost(val) {
    $("#costs").append('<div><p><input id="cost" type="number" value="' + val + '" placeholder="1000"/> <a href="#" id="remove">Удалить</a><hr /></p></div>');
}

function loadChanges() {
    storage.get(['answers', 'costs'], function(items) {

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
    $('a#remove').click(function(el) {
        $(el.target).parent().parent().remove('*');
    });
}
bind_remove();

$('#add_answer').click(function() {
    appendAnswer('');
    bind_remove();
});


$('#add_cost').click(function() {
    appendCost('');
    bind_remove();
});