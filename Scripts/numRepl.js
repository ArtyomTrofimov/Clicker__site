//Функция изменения представления чисел. Пример (1000000 => 1 M)
function KMBMaker(elem) {
    var num = elem;
    abbvNum = 1;    //Переменная номера аббревеатуры названий чисел
    var arrayRdc = ['', ' K', ' M', ' B', ' T', ' q', ' Q', ' s', ' S', ' O', ' N'];    //Массив сокращений названий чисел
    for (i = 1000; ; i = i * 1000) {
        if (num < i) {
            var numStr = +(num / (i / 1000)).toFixed(3); //Преобразование числа к 1-3 цифрам до запятой с округлением до 3 знаков после запятой.
            var text = numStr + arrayRdc[abbvNum - 1];  //Создание строки numStr + Номер аббревеатуры названия
            break;
        } else if (isNaN(num)) {
            break;
        }
        abbvNum++;

    }
    return text;
}
