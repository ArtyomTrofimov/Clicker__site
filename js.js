var click_score = 100000000;
var click_lvl = 1;
var upgrade_mult = 2;

function Click() {
    document.getElementById('score').value = parseInt(+document.getElementById('score').value) + click_score;
    document.getElementById('audio1').play()

}

function strReplace(str) {
    return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
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
            document.getElementById('upgrade_click').disabled = true;
        }
        upgrade_mult += 1;

    } else if (eval(document.getElementById('score').value) < 5 * Math.pow(10, upgrade_mult) && click_lvl != 3) {
        alert('Недостаточно монет');
    } else {
        document.getElementById('score').innerText = 'Вы максимально улучшили клик';
    }

}

function upgrade(elem) {

    var incomInc = parseInt(elem.dataset.valueInc)
    var lvl = parseInt(elem.dataset.lvl);
    var basePrice = parseInt(elem.dataset.basePrice);
    var price = Math.round(basePrice * Math.pow((1.15), lvl));

    if (eval((document.getElementById('score').value)) >= price) {
        elem.value = 0;
        (document.getElementById('score').value) -= price;
        elem.dataset.lvl = lvl + 1;
        elem.value = parseInt(elem.dataset.lvl) * incomInc;
        elem.innerText = elem.dataset.name + '\n' + elem.dataset.lvl + '\nСтоимость: ' + (Math.round(basePrice * Math.pow((1.15), lvl + 1))) + ' монет';
        auto__inc_check();

    } else if (eval(document.getElementById('score').value) < price) {
        alert('Недостаточно монет');

    }
}


function boost_inc(elem) {

    var inc = (elem.dataset.name).split('');
    inc.splice(-1, 1);
    var str = inc.join('');
    var upgrade = document.getElementById(str);
    var lvl = parseInt(elem.dataset.lvl);
    if (eval((document.getElementById('score').value)) >= parseInt(elem.dataset.price) && lvl < 9) {
        if (lvl < 8) {
            (document.getElementById('score').value) -= parseInt(elem.dataset.price);
            elem.dataset.lvl = lvl + 1;
            elem.dataset.price = parseInt(elem.dataset.price) + parseInt(elem.dataset.price) * (parseInt(elem.dataset.priceInc) - 1) * parseInt(elem.dataset.lvl);
            upgrade.dataset.incomBoost = parseInt(upgrade.dataset.incomBoost) + 1;
            elem.innerText = 'Общий множитель "' + upgrade.dataset.name + '": ' + (parseInt(upgrade.dataset.incomBoost) * 100) + '%\n' + upgrade.dataset.name + ' + 100%\nУровень: ' + elem.dataset.lvl + '\nСтоимость: ' + parseInt(elem.dataset.price) + ' монет';
        } else if (lvl == 8) {
            (document.getElementById('score').value) -= parseInt(elem.dataset.price);
            elem.dataset.lvl = lvl + 1;
            elem.dataset.price = parseInt(elem.dataset.price) + parseInt(elem.dataset.price) * (parseInt(elem.dataset.priceInc) - 1) * parseInt(elem.dataset.lvl);
            upgrade.dataset.incomBoost = parseInt(upgrade.dataset.incomBoost) + 1;
            elem.innerText = 'Общий множитель "' + upgrade.dataset.name + '": ' + (parseInt(upgrade.dataset.incomBoost) * 100) + '%\n' + upgrade.dataset.name + ' \nУровень: ' + elem.dataset.lvl + '\nВы купили все улучшения для этого здания ';
        }

        auto__inc_check();
    } else if (eval((document.getElementById('score').value)) < parseInt(elem.dataset.price) && parseInt(elem.dataset.lvl) < 8) {
        alert('Недостаточно монет')
    } else {
        elem.innerText = 'Общий множитель "' + upgrade.dataset.name + '": ' + (parseInt(upgrade.dataset.incomBoost) * 100) + '%\n' + upgrade.dataset.name + ' \nУровень: ' + elem.dataset.lvl + '\nВы купили все улучшения для этого здания ';
    }
}

