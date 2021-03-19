//Функция добавления дохода от зданий
function auto() {
    var int = +(document.getElementById('score').dataset.incom),
        str = document.getElementsByName('build'),
        skillBoost = +document.getElementById('mana_bar').dataset.boost;
    for (i = 0; i < str.length; i++) {
        int += parseInt(str[i].value) * parseInt(str[i].dataset.incomBoost) * skillBoost;

    }
    document.getElementById('score').dataset.incom = int;
    document.getElementById('score').value = KMBMaker(int);
}

setInterval(auto, 1000);