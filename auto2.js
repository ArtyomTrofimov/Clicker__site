function auto() {

    document.getElementById('score').value = eval(document.getElementById('score').value) + (eval(document.getElementById('farm').value) * eval(document.getElementById('farm').dataset.incomBoost));
    document.getElementById('score').value = eval(document.getElementById('score').value) + (eval(document.getElementById('forge').value) * eval(document.getElementById('forge').dataset.incomBoost));
    document.getElementById('score').value = eval(document.getElementById('score').value) + (eval(document.getElementById('inn').value) * eval(document.getElementById('inn').dataset.incomBoost))
    document.getElementById('score').value = eval(document.getElementById('score').value) + (eval(document.getElementById('barracks').value) * eval(document.getElementById('barracks').dataset.incomBoost))
    document.getElementById('score').value = eval(document.getElementById('score').value) + (eval(document.getElementById('mine').value) * eval(document.getElementById('mine').dataset.incomBoost))

}

setInterval(auto, 1000);