function pop(e) {
    var x = e.clientX;
    var y = e.clientY;

    createParticle(x, y);
}

function createParticle(x, y) {
    var incom = document.getElementById('score').getBoundingClientRect();

    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    let width = 30;
    let height = width;
    let destinationX = incom.x;
    let destinationY = incom.y;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 200;
    particle.style.backgroundImage = 'url(Css/img/favicon.png)'; // Ссылка на картинку


    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    const animation = particle.animate([
        {
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
            opacity: 1
        },
        {
            transform: `translate(-50%, -50%) translate(${destinationX + 217}px, ${destinationY + 25}px) rotate(${rotation}deg)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 1000 + 5000, // Продолжительность всех эффектов
        easing: 'cubic-bezier(.34,1.56,.56,1.81)',
        delay: delay
    });
    animation.onfinish = removeParticle;
}
function removeParticle(e) {
    e.srcElement.effect.target.remove();
}