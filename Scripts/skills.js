function CoinCollect() {
    var elem = document.getElementById('mana_bar'),
        background = document.getElementById('manapool'),
        mana = +elem.dataset.mana,
        maxMana = elem.dataset.maxMana;
    if (mana >= 200) {
        elem.dataset.mana -= 200;
        elem.style.width = elem.dataset.mana / maxMana * 100 + '%';
        background.innerHTML = 'MANA: ' + elem.dataset.mana + '/' + maxMana;
        var int = +(document.getElementById('score').dataset.incom),
            str = document.getElementsByName('build'),
            skillBoost = +document.getElementById('mana_bar').dataset.boost;
        for (i = 0; i < str.length; i++) {
            int += parseInt(str[i].value) * parseInt(str[i].dataset.incomBoost) * skillBoost * 30;
        }
        document.getElementById('score').dataset.incom = int;
        document.getElementById('score').value = KMBMaker(int);
    }
    auto__inc_check();
}

function BoostEconomy() {
    var elem = document.getElementById('mana_bar'),
        background = document.getElementById('manapool'),
        mana = +elem.dataset.mana,
        maxMana = elem.dataset.maxMana;
    if (mana >= 400) {
        elem.dataset.mana -= 400;
        elem.style.width = elem.dataset.mana / maxMana * 100 + '%';
        background.innerHTML = 'MANA: ' + elem.dataset.mana + '/' + maxMana;
        elem.dataset.boost = +elem.dataset.boost + 1;
        document.getElementById('Boost_Economy').disabled = true;
        setTimeout(endOfSkill, 20000);
        function endOfSkill() {
            elem.dataset.boost = +elem.dataset.boost - 1;
            auto__inc_check();
            document.getElementById('Boost_Economy').disabled = false;
        }
        auto__inc_check();
    }
}

function ClickBoost() {
    var elem = document.getElementById('mana_bar'),
        background = document.getElementById('manapool'),
        click = document.getElementById('upgrade_click').value,
        mana = +elem.dataset.mana,
        maxMana = elem.dataset.maxMana;
    if (mana >= 700) {
        elem.dataset.mana -= 700;
        elem.style.width = elem.dataset.mana / maxMana * 100 + '%';
        background.innerHTML = 'MANA: ' + elem.dataset.mana + '/' + maxMana;
        document.getElementById('upgrade_click').value = click * 20;
        document.getElementById('Click_boost').disabled = true;
        setTimeout(endOfSkill, 10000);
        function endOfSkill() {
            document.getElementById('upgrade_click').value = click;
            auto__inc_check();
            document.getElementById('Click_boost').disabled = false;
        }
        auto__inc_check();
    }
}

