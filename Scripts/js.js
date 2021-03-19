//Для KMBMaker смотреть файл numRepl.js
//Функция определения нажатия и звуковых эффектов
function Click() {
    var score = document.getElementById('score');
    score.dataset.incom = parseInt(score.dataset.incom) + +document.getElementById("upgrade_click").value;
    var incomeClick = +score.dataset.incom;
    score.value = KMBMaker(incomeClick);    //Изменение отображений чисел через функцию
    click_audio();
}

function click_audio() {
    //Определение звуковых эффектов для нажатия
    var min = 1;
    var max = 5;
    var audio__rnd = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    var slideVolume = +document.getElementById('jcp-volume').value / 10;
    if (audio__rnd == 1) {
        document.getElementById('audio1').play()
        var sound = document.getElementById('audio1');
        sound.volume = slideVolume;
    } else if (audio__rnd == 2) {
        document.getElementById('audio2').play()
        var sound = document.getElementById('audio2');
        sound.volume = slideVolume;
    } else if (audio__rnd == 3) {
        document.getElementById('audio3').play()
        var sound = document.getElementById('audio3');
        sound.volume = slideVolume;
    } else if (audio__rnd == 4) {
        document.getElementById('audio4').play()
        var sound = document.getElementById('audio4');
        sound.volume = slideVolume;
    } else {
        document.getElementById('audio5').play()
        var sound = document.getElementById('audio5');
        sound.volume = slideVolume;
    }
}

function fun1() {
    var volume = document.getElementById('jcp-volume').value;
    document.getElementById('volume').innerText = 'Громкость: ' + volume * 10 + '%';
}

//Функция улучшение нажатия
function upgrade_click() {
    var score = document.getElementById('score');   //Получение элемента подсчёта очков
    var click = document.getElementById("upgrade_click");   //Получение элемента улучшения нажатия
    if (eval(score.dataset.incom) >= click.dataset.price) {
        score.dataset.incom -= click.dataset.price;     //Вычитание из элемента подсчёта очков стоимость улучшения нажатия
        score.value = KMBMaker(+score.dataset.incom);   //Преобразования числа с помощью функции
        click.value = +click.value * 5;
        click.dataset.price = click.dataset.price * click.dataset.priceInc;     //Увеличение цены улучшения
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
//Функция покупки зданий
function upgrade(elem) {

    var incomInc = parseInt(elem.dataset.valueInc)
    var lvl = parseInt(elem.dataset.lvl);   //Текущий уровени здания
    var basePrice = parseInt(elem.dataset.basePrice);   //Базовая стоимость здания
    var price = Math.round(basePrice * Math.pow((1.15), lvl));  //Стоимость здания в зависимости от уровня
    var buy_count = +document.getElementById('buy_switch').value;   //Определение количества приобретаемых зданий
    //Определение цены для X-покупаемых зданий
    var counter = 1;
    for (j = 0; j < buy_count - 1; j++) {
        price += Math.round(basePrice * Math.pow((1.15), lvl + counter));
        counter++;
    }
    if (elem.dataset.lvl < 1) {
        document.getElementById('farm_ico').style.display = 'block';
    }
    if (eval((document.getElementById('score').dataset.incom)) >= price) {
        (document.getElementById('score').dataset.incom) -= price;
        document.getElementById('score').value = KMBMaker(+document.getElementById('score').dataset.incom);
        elem.dataset.lvl = lvl + buy_count;
        elem.value = parseInt(elem.dataset.lvl) * incomInc;
        //Вызов функции смены переключателся для изменения отображения новых цен на здания
        switchBuy(document.getElementById('buy_switch'));
        switchBuy(document.getElementById('buy_switch'));
        //Функция обновляет доход в секунду после покупки
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
//Функция улучшения зданий
function boost_inc(elem) {

    var inc = (elem.dataset.name).split('');    //Получение и преобразования имени улучшения в имя здания
    inc.splice(-1, 1);
    var str = inc.join('');
    var build = document.getElementById(str);     //Нахождение элемента
    var lvl = parseInt(elem.dataset.lvl);   //Получение текущего уровня улучшения
    var score = document.getElementById('score');
    var maxLvL = 9;     //Максимальный уровень улучшения
    if (+score.dataset.incom >= parseInt(elem.dataset.price) && lvl <= maxLvL - 1) {
        if (lvl < maxLvL - 1) {
            (score.dataset.incom) -= parseInt(elem.dataset.price);
            score.value = KMBMaker(+score.dataset.incom);
            elem.dataset.lvl = lvl + 1;
            elem.dataset.price = parseInt(elem.dataset.price) + parseInt(elem.dataset.price) * (parseInt(elem.dataset.priceInc) - 1) * parseInt(elem.dataset.lvl);
            build.dataset.incomBoost = parseInt(build.dataset.incomBoost) + 1;
            elem.innerText = 'Общий множитель "' + build.dataset.name + '": ' + (parseInt(build.dataset.incomBoost) * 100) + '%\n' + build.dataset.name + ' + 100%\nУровень: ' + elem.dataset.lvl + '\nСтоимость: ' + KMBMaker(+elem.dataset.price);
        } else if (lvl == maxLvL - 1) {
            (score.dataset.incom) -= parseInt(elem.dataset.price);
            score.value = KMBMaker(+score.dataset.incom);
            elem.dataset.lvl = lvl + 1;
            elem.dataset.price = parseInt(elem.dataset.price) + parseInt(elem.dataset.price) * (parseInt(elem.dataset.priceInc) - 1) * parseInt(elem.dataset.lvl);
            build.dataset.incomBoost = parseInt(build.dataset.incomBoost) + 1;
            elem.innerText = 'Общий множитель "' + build.dataset.name + '": ' + (parseInt(build.dataset.incomBoost) * 100) + '%\n' + build.dataset.name + ' \nУровень: ' + elem.dataset.lvl + '\nВы купили все улучшения для этого здания ';
        }

        auto__inc_check();
    } else if (+score.dataset.incom < parseInt(elem.dataset.price) && parseInt(elem.dataset.lvl) < maxLvL) {
        note({
            content: "Недостаточно монет",
            type: "error",
            time: 1
        });
    } else {
        elem.innerText = 'Общий множитель "' + upgrade.dataset.name + '": ' + (parseInt(upgrade.dataset.incomBoost) * 100) + '%\n' + upgrade.dataset.name + ' \nУровень: ' + elem.dataset.lvl + '\nВы купили все улучшения для этого здания ';
    }
}