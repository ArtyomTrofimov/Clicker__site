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
    var farm = document.getElementById('farm');
    var forge = document.getElementById('forge');
    var inn = document.getElementById('inn');
    var barracks = document.getElementById('barracks')
    var mine = document.getElementById('mine')
    var castle = document.getElementById('castle');
    farm.value = 0;
    farm.dataset.lvl = 0;
    farm.innerText = 'Купить ферму\nСтоимость: 10 монет';
    forge.value = 0;
    forge.dataset.lvl = 0;
    forge.innerText = 'Купить кузницу\nСтоимость: 125 монет';
    inn.value = 0;
    inn.dataset.lvl = 0;
    inn.innerText = 'Купить таверну\nСтоимость: 600 монет';
    barracks.value = 0;
    barracks.dataset.lvl = 0;
    barracks.innerText = 'Купить тренировочные площадки\nСтоимость: 1800 монет';
    mine.value = 0;
    mine.dataset.lvl = 0;
    mine.innerText = 'Купить шахту\nСтоимость: 5600 монет';
    castle.value = 0;
    castle.dataset.lvl = 0;
    castle.innerText = 'Купить крепость\nСтоимость: 5600 монет';
    temple.value = 0;
    temple.dataset.lvl = 0;
    temple.innerText = 'Купить храм\nСтоимость: 5600 монет';

    document.getElementById('incom').value = '0/sec';
    document.getElementById('score').dataset.incom = 0;
    document.getElementById('score').value = 0;
    note({
        content: "Сброшено текущее состояние игры до старта",
        type: "success",
        time: 3
    });
}