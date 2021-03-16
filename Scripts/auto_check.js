//Функция обрабоки дохода в секунду 
function auto__inc_check() {
    document.getElementById('incom').incomSec = 0;
    var int = parseInt(document.getElementById('incom').incomSec);
    var str = document.getElementsByName('build');
    for (i = 0; i < str.length; i++) {
        int += parseInt(str[i].value) * parseInt(str[i].dataset.incomBoost);

    }
    document.getElementById('incom').value = KMBMaker(int) + '/sec';
}