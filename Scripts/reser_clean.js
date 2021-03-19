//Функция очистки поля текущего количества очков
function Clean() {
    document.getElementById('score').dataset.incom = 0;
    document.getElementById('score').value = 0;
    note({
        content: "Сброшено текущее количество монет",
        type: "success",
        time: 3
    });
}
//Функция полного сброса игры до начала
function Reset() {
    var builds = document.getElementsByName('build');
    for (i = 0; i < builds.length; i++) {
        builds[i].value = 0;
        builds[i].dataset.lvl = 0;

    }
    switchBuy(document.getElementById('buy_switch'));
    switchBuy(document.getElementById('buy_switch'));
    document.getElementById('incom').value = '0/sec';
    document.getElementById('score').dataset.incom = 0;
    document.getElementById('score').value = 0;
    note({
        content: "Сброшено текущее состояние игры до старта",
        type: "success",
        time: 3
    });
}