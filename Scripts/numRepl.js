//Функция изменения представления чисел. Пример (1000000 => 1 M или 1e6)
function KMBMaker(elem) {
    var radio = document.getElementsByName('numAbbv');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            value = i;
            break;
        }
    }
    var num = elem;
    if (value == 0) {
        var abbvNum = 1,    //Переменная номера аббревеатуры названий чисел
            arrayRdc = ['', ' K', ' M', ' B', ' T', ' q', ' Q', ' s', ' S', ' O', ' N'];    //Массив сокращений названий чисел
        for (i = 1000; ; i = i * 1000) {
            if (num < i) {
                var numStr = +(num / (i / 1000)).toFixed(3), //Преобразование числа к 1-3 цифрам до запятой с округлением до 3 знаков после запятой.
                    text = numStr + arrayRdc[abbvNum - 1];  //Создание строки numStr + Номер аббревеатуры названия
                break;
            } else if (isNaN(num)) {
                break;
            }
            abbvNum++;

        }
        return text;
    } else if (value == 1) {
        var abbvNum = 6;
        for (i = 10000000; ; i = i * 10) {
            if (num < i && num >= 1000000) {
                var numStr = +(num / (i / 10)).toFixed(3),
                    text = numStr + 'e' + abbvNum;
                break;
            } else if (num < 1000000) {
                text = num;
                break;
            } else if (isNaN(num)) {
                break;
            }
            abbvNum++;
        }
        return text;
    }
}

function numInit() {
    var builds = document.getElementsByName('build'),
        upgrades = document.getElementsByName('Upgrades');
    for (var k = 0; k < builds.length; k++) {
        price = Math.round(+builds[k].dataset.basePrice * Math.pow((1.15), +builds[k].dataset.lvl));
        builds[k].innerText = builds[k].dataset.name + '\n' + builds[k].dataset.lvl + '\nСтоимость 1 X : ' + KMBMaker(price);
    }
    for (var j = 0; j < upgrades.length; j++) {
        if (upgrades[j].dataset.lvl >= 1) {
            upgrades[j].innerText = builds[j].dataset.name + '\nДоход: ' + (parseInt(builds[j].dataset.incomBoost) * 100) + '% \nУровень: ' + upgrades[j].dataset.lvl + '\nСтоимость: ' + KMBMaker(+upgrades[j].dataset.price);
        } else {
            upgrades[j].innerText = builds[j].dataset.name + '\nДоход + 100%\nСтоимость: ' + KMBMaker(+upgrades[j].dataset.price);
        }
    }
}
