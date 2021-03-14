function Click() {
    var score = document.getElementById('score');
    score.dataset.incom = parseInt(score.dataset.incom) + +document.getElementById("upgrade_click").value;
    var incomeClick = +score.dataset.incom;
    score.value = KMBMaker(incomeClick);
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
    var score = document.getElementById('score');
    var click = document.getElementById("upgrade_click");
    if (eval(score.dataset.incom) >= click.dataset.price) {
        score.dataset.incom -= click.dataset.price;
        score.value = KMBMaker(+score.dataset.incom);
        click.value = +click.value * 5;
        click.dataset.price = click.dataset.price * click.dataset.priceInc;
        click.innerText = 'Улучшить клик\nСтоимость: ' + KMBMaker(click.dataset.price);

    } else if (eval(score.value) < 5 * click.dataset.price) {
        note({
            content: "Недостаточно монет",
            type: "error",
            time: 1
        });
    } else {
        score.innerText = 'Вы максимально улучшили клик';
    }

}

function upgrade(elem) {

    var incomInc = parseInt(elem.dataset.valueInc)
    var lvl = parseInt(elem.dataset.lvl);
    var basePrice = parseInt(elem.dataset.basePrice);
    var price = Math.round(basePrice * Math.pow((1.15), lvl));
    var buy_count = +document.getElementById('buy_switch').value;
    var counter = 1;
    for (j = 0; j < buy_count - 1; j++) {
        price += Math.round(basePrice * Math.pow((1.15), lvl + counter));
        counter++;
    }
    if (eval((document.getElementById('score').dataset.incom)) >= price) {
        (document.getElementById('score').dataset.incom) -= price;
        document.getElementById('score').value = KMBMaker(+document.getElementById('score').dataset.incom);
        elem.dataset.lvl = lvl + buy_count;
        elem.value = parseInt(elem.dataset.lvl) * incomInc;
        switchBuy(document.getElementById('buy_switch'));
        switchBuy(document.getElementById('buy_switch'));
        auto__inc_check();

    }
    else if (eval(document.getElementById('score').dataset.incom) < price) {
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
    if (+document.getElementById('score').dataset.incom >= parseInt(elem.dataset.price) && lvl <= 8) {
        if (lvl < 8) {
            (document.getElementById('score').dataset.incom) -= parseInt(elem.dataset.price);
            document.getElementById('score').value = KMBMaker(+document.getElementById('score').dataset.incom);
            elem.dataset.lvl = lvl + 1;
            elem.dataset.price = parseInt(elem.dataset.price) + parseInt(elem.dataset.price) * (parseInt(elem.dataset.priceInc) - 1) * parseInt(elem.dataset.lvl);
            upgrade.dataset.incomBoost = parseInt(upgrade.dataset.incomBoost) + 1;
            elem.innerText = 'Общий множитель "' + upgrade.dataset.name + '": ' + (parseInt(upgrade.dataset.incomBoost) * 100) + '%\n' + upgrade.dataset.name + ' + 100%\nУровень: ' + elem.dataset.lvl + '\nСтоимость: ' + KMBMaker(+elem.dataset.price);
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