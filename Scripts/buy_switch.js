//Функция смены переключателя для покупки зданий и обрабоки стоимости на основе переключателя 
function switchBuy(elem) {
    var buy = +elem.value;
    var str = document.getElementsByName('build');
    if (buy == 1) {
        elem.value = 10;
        elem.innerText = 'Купить 10'
        for (let i = 0; i < str.length; i++) {
            var build = str[i];
            var price = 0;
            var counter = 0;
            for (j = 0; j < elem.value; j++) {
                price += Math.round(+build.dataset.basePrice * Math.pow((1.15), (+build.dataset.lvl + counter)));
                counter++;
            }
            build.innerText = build.dataset.name + '\n' + build.dataset.lvl + '\nСтоимость 10 X : ' + KMBMaker(price);

        }

    } else {
        elem.value = 1;
        elem.innerText = 'Купить 1'
        for (let i = 0; i < str.length; i++) {
            var build = str[i];
            price = Math.round(+build.dataset.basePrice * Math.pow((1.15), +build.dataset.lvl));
            build.innerText = build.dataset.name + '\n' + build.dataset.lvl + '\nСтоимость 1 X : ' + KMBMaker(price);

        }
    }
}