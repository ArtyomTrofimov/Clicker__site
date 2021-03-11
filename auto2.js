function auto() {

    document.getElementById('score').value = eval(document.getElementById('score').value) + (eval(document.getElementById('farm').value) * eval(document.getElementById('farm').dataset.incomBoost));
    document.getElementById('score').value = eval(document.getElementById('score').value) + (eval(document.getElementById('forge').value) * eval(document.getElementById('forge').dataset.incomBoost));
    document.getElementById('score').value = eval(document.getElementById('score').value) + eval(document.getElementById('inn').value);
    document.getElementById('score').value = eval(document.getElementById('score').value) + eval(document.getElementById('barracks').value);
    document.getElementById('score').value = eval(document.getElementById('score').value) + eval(document.getElementById('mine').value);

}

setInterval(auto, 1000);