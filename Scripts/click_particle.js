//Функция обрабоки позиции нажатия на экран
function pop(e) {
    var x = e.clientX;
    var y = e.clientY;

    createParticle(x, y);   //Вызов функции создания частиц при нажатии
}
//Функция создания частиц
function createParticle(x, y) {
    var incom = document.getElementById('score').getBoundingClientRect();//

    const particle = document.createElement('particle');    //Создание элемента частицы
    document.body.appendChild(particle);    //Добавляет в body элемент частиц
    let width = 30;
    let height = width;
    let rotation = Math.random() * 520;      //Переменная определяющая поворот частиц 
    let duration = 4000;    //Длительность анимации
    particle.style.backgroundImage = 'url(Css/img/favicon.png)'; // Ссылка на картинку
    let sideRnd = Math.floor(1 + Math.random() * (2 + 1 - 1));
    let sidePixelX = 0;
    if (sideRnd == 1) {
        sidePixelX = 4;
    } else {
        sidePixelX = -4;
    }


    particle.style.width = `${width}px`;    //Добавляет в стили элемента частиц ширину
    particle.style.height = `${height}px`;  //Добавляет в стили элемента частиц высоту
    //Создание анимации
    const animation = particle.animate([
        {   //Начальная позиция и прозрачность
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
            opacity: 1,

        },
        {
            transform: `translate(-50%, -50%) translate(${x + sidePixelX}px, ${y - 20}px) rotate(${rotation}deg)`,
            opacity: 1,
        },
        {
            transform: `translate(-50%, -50%) translate(${x + sidePixelX * 2}px, ${y - 30}px) rotate(${rotation}deg)`,
            opacity: 1,
        },
        {
            transform: `translate(-50%, -50%) translate(${x + sidePixelX * 3}px, ${y - 40}px) rotate(${rotation}deg)`,
            opacity: 1,
        },
        {
            transform: `translate(-50%, -50%) translate(${x + sidePixelX * 4}px, ${y - 40}px) rotate(${rotation}deg)`,
            opacity: 1,
        },
        {
            transform: `translate(-50%, -50%) translate(${x + sidePixelX * 5}px, ${y - 30}px) rotate(${rotation}deg)`,
            opacity: 0.8,
        },
        {
            transform: `translate(-50%, -50%) translate(${x + sidePixelX * 6}px, ${y}px) rotate(${rotation}deg)`,
            opacity: 0.6,
        },
        {
            transform: `translate(-50%, -50%) translate(${x + sidePixelX * 7}px, ${y + 30}px) rotate(${rotation}deg)`,
            opacity: 0.4,
        },
        {
            transform: `translate(-50%, -50%) translate(${x + sidePixelX * 8}px, ${y + 60}px) rotate(${rotation}deg)`,
            opacity: 0,
        }
    ], {
        duration: duration,
        easing: 'cubic-bezier(.16,.68,.19,1.03)'
    }
    );

    animation.onfinish = removeParticle;    //Удаление частиц по завершению анимации
}
function removeParticle(e) {
    e.srcElement.effect.target.remove();
}