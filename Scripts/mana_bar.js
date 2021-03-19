function manaBar() {
    var elem = document.getElementById('mana_bar'),
        background = document.getElementById('manaPool'),
        id = setInterval(progressStatus, 100),
        maxMana = elem.dataset.maxMana;
    function progressStatus() {
        var mana = +elem.dataset.mana,
            manaRegen = +elem.dataset.manaRegen;
        document.getElementById('manaRegenSec').innerText = +elem.dataset.manaRegen * 10 + ' / S'
        if (mana < maxMana) {
            mana += manaRegen;
            elem.dataset.mana = mana;
            elem.style.width = mana / maxMana * 100 + '%';
            background.innerHTML = 'MANA: ' + mana.toFixed(0) + '/' + maxMana;
        }
        var str = document.getElementsByName('build'),
            skillBoost = +document.getElementById('mana_bar').dataset.boost,
            int = 0;
        for (i = 0; i < str.length; i++) {
            int += parseInt(str[i].value) * parseInt(str[i].dataset.incomBoost) * skillBoost * 30;
        }
        document.getElementById('estimateValue').innerText = 'Примерный доход: ' + int;
    }



}
