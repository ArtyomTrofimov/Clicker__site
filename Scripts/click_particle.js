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
    let destinationX = +incom.right - +incom.right * 0.065;     //Переменная определяющая конечную позицию частиц по X
    let destinationY = incom.y;     //Переменная определяющая конечную позицию частиц по Y
    let rotation = Math.random() * 520;      //Переменная определяющая поворот частиц 
    let duration = 3000;    //Длительность анимации
    particle.style.backgroundImage = 'url(Css/img/favicon.png)'; // Ссылка на картинку


    particle.style.width = `${width}px`;    //Добавляет в стили элемента частиц ширину
    particle.style.height = `${height}px`;  //Добавляет в стили элемента частиц высоту
    //Создание анимации
    const animation = particle.animate([
        {   //Начальная позиция и прозрачность
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
            opacity: 1
        },
        {   //Конечная позиция и прозрачность
            transform: `translate(-50%, -50%) translate(${destinationX}px, ${destinationY + 25}px) rotate(${rotation}deg)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 1000 + 5000, // Продолжительность всех эффектов
        easing: 'cubic-bezier(.34,1.56,.56,1.81)', //Кривая для скорости анимации
        duration: duration  //Длительность анимации
    });
    animation.onfinish = removeParticle;    //Удаление частиц по завершению анимации
}
function removeParticle(e) {
    e.srcElement.effect.target.remove();
}