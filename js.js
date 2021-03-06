var click_score = 100000000;
var upgrade_mult = 1;
var gnom_lvl = 0;

function Clean() {
    document.getElementById('score').value = 0;
}

function Click() {
    document.getElementById('score').value = eval(document.getElementById('score').value) + click_score;
}

function upgrade_click() {
    if (eval(document.getElementById('score').value) >= 10 * upgrade_mult) {
        (document.getElementById('score').value) -= (document.getElementById('upgrade1').value) * upgrade_mult;
        click_score += 1;
        upgrade_mult += 1;
        document.getElementById("upgrade1").innerText = document.getElementById("upgrade1").value * upgrade_mult + ' рублей'
    } else {
        alert('Недостаточно средств');
    }
}
function upgrade_gnom() {
    if (eval(document.getElementById('score').value) >= 100 * (gnom_lvl + 1)) {
        (document.getElementById('score').value) -= 100 * (gnom_lvl + 1);
        document.getElementById('gnom1').value = eval(document.getElementById('gnom1').value) + 0.5;
        gnom_lvl += 1;
        document.getElementById("gnom1").innerText = 'Gnom X ' + gnom_lvl + '\n' + (100 * (gnom_lvl + 1)) + ' рублей';
    } else {
        alert('Недостаточно средств');
    }
}

function auto() {

    if (gnom_lvl >= 1) {
        document.getElementById('score').value = eval(document.getElementById('score').value) + eval(document.getElementById('gnom1').value);
    }


}

setInterval(auto, 1000);


