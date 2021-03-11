
function auto__inc_check() {
    document.getElementById('incom').value = 0;
    var int = parseInt(document.getElementById('incom').value);
    var str = document.getElementsByName('build');
    for (i = 0; i < str.length; i++) {
        int += parseInt(str[i].value) * parseInt(str[i].dataset.incomBoost);

    }
    document.getElementById('incom').value = int + '/sec';
}