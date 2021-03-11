function auto() {
    var score = parseInt(document.getElementById('score').value);
    var farmValue = parseInt(document.getElementById('farm').value) * parseInt(document.getElementById('farm').dataset.incomBoost);
    var forgeValue = parseInt(document.getElementById('forge').value) * parseInt(document.getElementById('forge').dataset.incomBoost);
    var innValue = parseInt(document.getElementById('inn').value) * parseInt(document.getElementById('inn').dataset.incomBoost);
    var barracksValue = parseInt(document.getElementById('barracks').value) * parseInt(document.getElementById('barracks').dataset.incomBoost);
    var mineValue = parseInt(document.getElementById('mine').value) * parseInt(document.getElementById('mine').dataset.incomBoost);
    var castleValue = parseInt(document.getElementById('castle').value) * parseInt(document.getElementById('castle').dataset.incomBoost);
    document.getElementById('score').value = score + farmValue + forgeValue + innValue + barracksValue + mineValue + castleValue;
}

setInterval(auto, 1000);
