//Функция добавления дохода от зданий
function auto() {
    var int = parseInt(document.getElementById('score').dataset.incom);
    var str = document.getElementsByName('build');
    for (i = 0; i < str.length; i++) {
        int += parseInt(str[i].value) * parseInt(str[i].dataset.incomBoost);

    }
    document.getElementById('score').dataset.incom = int;
    document.getElementById('score').value = KMBMaker(int);
}

setInterval(auto, 1000);