function manaBar() {
    var elem = document.getElementById('mana_bar'),
        background = document.getElementById('manapool'),
        id = setInterval(progressStatus, 1000),
        maxMana = elem.dataset.maxMana;
    function progressStatus() {
        var mana = +elem.dataset.mana,
            manaRegen = +elem.dataset.manaRegen;
        if (mana < maxMana) {
            mana += manaRegen;
            elem.dataset.mana = mana;
            elem.style.width = mana / maxMana * 100 + '%';
            background.innerHTML = 'MANA: ' + mana + '/' + maxMana;
        }
    }
}
