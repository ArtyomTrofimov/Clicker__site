var click_score = 10000;
var click_lvl = 1;
var upgrade_mult = 2;


function Clean() {
    document.getElementById('score').value = 0;
}

function Click() {
    document.getElementById('score').value = eval(document.getElementById('score').value) + click_score;
}

function upgrade_click() {
    if (eval(document.getElementById('score').value) >= 5 * Math.pow(10, upgrade_mult) && click_lvl <= 2) {
        (document.getElementById('score').value) -= 5 * Math.pow(10, upgrade_mult);

        if (click_lvl == 1) {
            click_score += 4;
            click_lvl += 1;
            document.getElementById("upgrade_click").innerText = 'Стоимость: ' + 5 * Math.pow(10, upgrade_mult + 1) + ' монет';
        } else if (click_lvl == 2) {
            click_score += 45;
            click_lvl += 1;
            document.getElementById('upgrade_click').innerText = 'Вы максимально улучшили клик';
        }
        upgrade_mult += 1;

    } else if (eval(document.getElementById('score').value) < 5 * Math.pow(10, upgrade_mult) && click_lvl != 3) {
        alert('Недостаточно монет');
    } else {
        document.getElementById('score').innerText = 'Вы максимально улучшили клик';
    }

}

function upgrade(elem) {

    var incom = parseInt(elem.value);
    var incomInc = parseInt(elem.dataset.valueInc)
    var price = parseInt(elem.dataset.price);
    var lvl = parseInt(elem.dataset.lvl);
    var priceScale = parseInt(elem.dataset.priceInc);

    if (eval((document.getElementById('score').value)) >= price + priceScale * lvl) {
        (document.getElementById('score').value) -= price + priceScale * lvl;
        elem.value = incom + incomInc;
        elem.dataset.lvl = lvl + 1;
        elem.innerText = elem.dataset.name + '\n' + elem.dataset.lvl + '\nСтоимость: ' + (price + priceScale * (lvl + 1)) + ' монет';
        document.getElementById('incom').value = parseInt(document.getElementById('incom').value) + parseInt(elem.dataset.valueInc) + '/sec';

    } else if (eval(document.getElementById('score').value) < price + priceScale * lvl) {
        alert('Недостаточно монет');
    }



}




