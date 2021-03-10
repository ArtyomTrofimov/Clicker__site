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
    elem.value = 0;
    var incomInc = parseInt(elem.dataset.valueInc)
    var price = parseInt(elem.dataset.price);
    var lvl = parseInt(elem.dataset.lvl);
    var priceScale = parseInt(elem.dataset.priceInc);
    var boost = parseInt(elem.dataset.incomBoost);

    if (eval((document.getElementById('score').value)) >= price + priceScale * lvl) {
        (document.getElementById('score').value) -= price + priceScale * lvl;
        elem.dataset.lvl = lvl + 1;
        elem.value = parseInt(elem.dataset.lvl) * incomInc * boost;
        elem.innerText = elem.dataset.name + '\n' + elem.dataset.lvl + '\nСтоимость: ' + (price + priceScale * (lvl + 1)) + ' монет';
        auto__inc_check();

    } else if (eval(document.getElementById('score').value) < price + priceScale * lvl) {
        alert('Недостаточно монет');
    }

}


function boost_inc(elem) {
    var inc = elem.dataset.name;
    var arr = inc.split('');
    arr.splice(-1, 1);
    var str = arr.join('');
    document.getElementById(str).dataset.incomBoost = parseInt(document.getElementById(str).dataset.incomBoost) * 2;
    var str2 = document.getElementById(str);
    str2.value = parseInt(str2.dataset.lvl) * parseInt(str2.dataset.valueInc) * parseInt(str2.dataset.incomBoost);
    auto__inc_check();





}




