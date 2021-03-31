var clicksCount = 0;
function displayAchivment() {
    var clickAchivments = document.getElementsByClassName('achivment');
    for (let i = 0; i < clickAchivments.length; i++) {
        clickAchivments[i].style.display = 'none';
    }
}

function clickAchivmentScore() {
    clicksCount++;
    var i = 1;
    if (clicksCount >= 500 * i && clicksCount <= 100000) {
        note({
            content: "Вы получили достижение",
            type: "success",
            time: 1
        });
        i++;
    }
}