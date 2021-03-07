var click_score = 100000;
var click_lvl = 1;
var upgrade_mult = 2;


function Clean() {
    document.getElementById('score').value = 0;
}

function Click() {
    document.getElementById('score').value = eval(document.getElementById('score').value) + click_score;
}

function upgrade_click() {
    if (eval(document.getElementById('score').value) >= 5 * Math.pow(10, upgrade_mult) && click_lvl <= 2) {
        (document.getElementById('score').value) -= 5 * Math.pow(10, upgrade_mult);

        if (click_lvl == 1) {
            click_score += 4;
            click_lvl += 1;
            document.getElementById("upgrade_click").innerText = 'Стоимость: ' + 5 * Math.pow(10, upgrade_mult + 1) + ' монет';
        } else if (click_lvl == 2) {
            click_score += 45;
            click_lvl += 1;
            document.getElementById('upgrade_click').innerText = 'Вы максимально улучшили клик';
        }
        upgrade_mult += 1;

    } else if (eval(document.getElementById('score').value) < 5 * Math.pow(10, upgrade_mult) && click_lvl != 3) {
        alert('Недостаточно монет');
    } else {
        document.getElementById('score').innerText = 'Вы максимально улучшили клик';
    }

}

var farm_lvl = 0;

function upgrade_farm() {
    if (eval(document.getElementById('score').value) >= 100 + 20 * farm_lvl && farm_lvl <= 9) {
        (document.getElementById('score').value) -= 100 + 20 * farm_lvl;
        if (farm_lvl < 9) {
            document.getElementById('farm').value = eval(document.getElementById('farm').value) + 2;
            farm_lvl += 1;
            document.getElementById("farm").innerText = 'Ферма\nУровень: ' + farm_lvl + '\nСтоимость: ' + (100 + 20 * farm_lvl) + ' монет';
        } else if (farm_lvl == 9) {
            document.getElementById('farm').value = eval(document.getElementById('farm').value) + 2;
            farm_lvl += 1;
            document.getElementById("farm").innerText = 'Ферма\nУровень: ' + farm_lvl + '\nВы максимально улучшили ферму';
        }
    } else if (eval(document.getElementById('score').value) < 100 + 20 * farm_lvl && farm_lvl <= 9) {
        alert('Недостаточно монет');
    } else {
        document.getElementById("farm").innerText = 'Ферма\nУровень: ' + farm_lvl + '\nВы максимально улучшили ферму';
    }
}

var forge_lvl = 0;

function upgrade_forge() {
    if (eval(document.getElementById('score').value) >= 1000 + 250 * forge_lvl && forge_lvl <= 9) {
        (document.getElementById('score').value) -= 1000 + 250 * forge_lvl;
        if (forge_lvl < 9) {
            document.getElementById('forge').value = eval(document.getElementById('forge').value) + 6;
            forge_lvl += 1;
            document.getElementById("forge").innerText = 'Кузница\nУровень: ' + forge_lvl + '\nСтоимость: ' + (1000 + 250 * forge_lvl) + ' монет';
        } else if (forge_lvl == 9) {
            document.getElementById('forge').value = eval(document.getElementById('forge').value) + 6;
            forge_lvl += 1;
            document.getElementById("forge").innerText = 'Кузница\nУровень: ' + forge_lvl + '\nВы максимально улучшили кузницу';
        }
    } else if (eval(document.getElementById('score').value) < 1000 + 250 * forge_lvl && forge_lvl <= 9) {
        alert('Недостаточно монет');
    } else {
        document.getElementById("forge").innerText = 'Кузница\nУровень: ' + forge_lvl + '\nВы максимально улучшили кузницу';
    }
}



function auto() {

    document.getElementById('score').value = eval(document.getElementById('score').value) + eval(document.getElementById('farm').value);
    document.getElementById('score').value = eval(document.getElementById('score').value) + eval(document.getElementById('forge').value);

}

setInterval(auto, 1000);

