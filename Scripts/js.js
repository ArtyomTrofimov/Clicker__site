var click_score = 10000000000000;
var click_lvl = 1;
var upgrade_mult = 2;

function Click() {
    document.getElementById('score').dataset.incom = parseInt(document.getElementById('score').dataset.incom) + click_score;
    var incomeClick = +document.getElementById('score').dataset.incom;
    document.getElementById('score').value = KMBMaker(incomeClick);
    var min = 1;
    var max = 5;
    var audio__rnd = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    if (audio__rnd == 1) {
        document.getElementById('audio1').play()
    } else if (audio__rnd == 2) {
        document.getElementById('audio2').play()
    } else if (audio__rnd == 3) {
        document.getElementById('audio3').play()
    } else if (audio__rnd == 4) {
        document.getElementById('audio4').play()
    } else {
        document.getElementById('audio5').play()
    }
}

function upgrade_click() {
    if (eval(document.getElementById('score').dataset.incom) >= 5 * Math.pow(10, upgrade_mult) && click_lvl <= 2) {
        (document.getElementById('score').dataset.incom) -= 5 * Math.pow(10, upgrade_mult);
        document.getElementById('score').value = KMBMaker(+document.getElementById('score').dataset.incom);
        if (click_lvl == 1) {
            click_score += 4;
            click_lvl += 1;
            document.getElementById("upgrade_click").innerText = 'Стоимость: ' + KMBMaker(5 * Math.pow(10, upgrade_mult + 1)) + ' монет';
        } else if (click_lvl == 2) {
            click_score += 45;
            click_lvl += 1;
            document.getElementById('upgrade_click').innerText = 'Вы максимально улучшили клик';
            document.getElementById('upgrade_click').disabled = true;
        }
        upgrade_mult += 1;

    } else if (eval(document.getElementById('score').value) < 5 * Math.pow(10, upgrade_mult) && click_lvl != 3) {
        note({
            content: "Недостаточно монет",
            type: "error",
            time: 1
        });
    } else {
        document.getElementById('score').innerText = 'Вы максимально улучшили клик';
    }

}

function upgrade(elem) {

    var incomInc = parseInt(elem.dataset.valueInc)
    var lvl = parseInt(elem.dataset.lvl);
    var basePrice = parseInt(elem.dataset.basePrice);
    var price = Math.round(basePrice * Math.pow((1.15), lvl));

    if (eval((document.getElementById('score').dataset.incom)) >= price) {
        elem.value = 0;
        (document.getElementById('score').dataset.incom) -= price;
        document.getElementById('score').value = KMBMaker(+document.getElementById('score').dataset.incom);
        elem.dataset.lvl = lvl + 1;
        elem.value = parseInt(elem.dataset.lvl) * incomInc;
        elem.innerText = elem.dataset.name + '\n' + elem.dataset.lvl + '\nСтоимость: ' + KMBMaker(Math.round(basePrice * Math.pow((1.15), lvl + 1))) + ' монет';
        auto__inc_check();

    } else if (eval(document.getElementById('score').dataset.incom) < price) {
        note({
            content: "Недостаточно монет",
            type: "error",
            time: 1
        });

    }
}


function boost_inc(elem) {

    var inc = (elem.dataset.name).split('');
    inc.splice(-1, 1);
    var str = inc.join('');
    var upgrade = document.getElementById(str);
    var lvl = parseInt(elem.dataset.lvl);
    if (+document.getElementById('score').dataset.incom >= parseInt(elem.dataset.price) && lvl < 9) {
        if (lvl < 8) {
            (document.getElementById('score').dataset.incom) -= parseInt(elem.dataset.price);
            document.getElementById('score').value = KMBMaker(+document.getElementById('score').dataset.incom);
            elem.dataset.lvl = lvl + 1;
            elem.dataset.price = parseInt(elem.dataset.price) + parseInt(elem.dataset.price) * (parseInt(elem.dataset.priceInc) - 1) * parseInt(elem.dataset.lvl);
            upgrade.dataset.incomBoost = parseInt(upgrade.dataset.incomBoost) + 1;
            elem.innerText = 'Общий множитель "' + upgrade.dataset.name + '": ' + (parseInt(upgrade.dataset.incomBoost) * 100) + '%\n' + upgrade.dataset.name + ' + 100%\nУровень: ' + elem.dataset.lvl + '\nСтоимость: ' + KMBMaker(+elem.dataset.price) + ' монет';
        } else if (lvl == 8) {
            (document.getElementById('score').dataset.incom) -= parseInt(elem.dataset.price);
            document.getElementById('score').value = KMBMaker(+document.getElementById('score').dataset.incom);
            elem.dataset.lvl = lvl + 1;
            elem.dataset.price = parseInt(elem.dataset.price) + parseInt(elem.dataset.price) * (parseInt(elem.dataset.priceInc) - 1) * parseInt(elem.dataset.lvl);
            upgrade.dataset.incomBoost = parseInt(upgrade.dataset.incomBoost) + 1;
            elem.innerText = 'Общий множитель "' + upgrade.dataset.name + '": ' + (parseInt(upgrade.dataset.incomBoost) * 100) + '%\n' + upgrade.dataset.name + ' \nУровень: ' + elem.dataset.lvl + '\nВы купили все улучшения для этого здания ';
        }

        auto__inc_check();
    } else if (+document.getElementById('score').dataset.incom < parseInt(elem.dataset.price) && parseInt(elem.dataset.lvl) < 9) {
        note({
            content: "Недостаточно монет",
            type: "error",
            time: 1
        });
    } else {
        elem.innerText = 'Общий множитель "' + upgrade.dataset.name + '": ' + (parseInt(upgrade.dataset.incomBoost) * 100) + '%\n' + upgrade.dataset.name + ' \nУровень: ' + elem.dataset.lvl + '\nВы купили все улучшения для этого здания ';
    }
}

function KMBMaker(elem) {
    var num = elem;
    sqrtNum = 1;
    var arrayRdc = ['', ' K', ' M', ' B', ' T', ' q', ' Q', ' s', ' S', ' O', ' N'];
    for (i = 1000; ; i = i * 1000) {
        if (num < i) {
            var numStr = +(num / (i / 1000)).toFixed(3);
            var text = numStr + arrayRdc[sqrtNum - 1];
            break;
        }
        sqrtNum++;

    }
    return text;
}
