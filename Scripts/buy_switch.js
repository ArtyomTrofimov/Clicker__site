function switchBuy(elem) {
    var buy = +elem.value;
    var str = document.getElementsByName('build');
    if (buy == 1) {
        elem.value = 10;
        elem.innerText = 'X 10'
        for (let i = 0; i < str.length; i++) {
            var build = str[i];
            var price = 0;
            var counter = 0;
            for (j = 0; j < elem.value; j++) {
                price += Math.round(+build.dataset.basePrice * Math.pow((1.15), (+build.dataset.lvl + counter)));
                counter++;
            }
            build.innerText = build.dataset.name + '\n' + build.dataset.lvl + '\nСтоимость: ' + KMBMaker(price);

        }

    } else {
        elem.value = 1;
        elem.innerText = 'X 1'
        for (let i = 0; i < str.length; i++) {
            var build = str[i];
            price = Math.round(+build.dataset.basePrice * Math.pow((1.15), +build.dataset.lvl));
            build.innerText = build.dataset.name + '\n' + build.dataset.lvl + '\nСтоимость: ' + KMBMaker(price);

        }
    }
}