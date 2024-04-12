// Получаем ссылку на элемент всплывающей подсказки
const tooltip = document.querySelector('.tooltip');

// Получаем ссылки на все элементы с классом "book" (предположительно, области на карте)
const voivodeships = document.querySelectorAll('.book');

// Для каждого элемента "book" на карте
voivodeships.forEach(voivodeship => {
    // Добавляем обработчики событий при наведении мыши на элемент

    // При наведении на область
    voivodeship.addEventListener('mouseenter', function() {
        // Получаем заголовок и текст из атрибутов данных
        const title = this.getAttribute('data-title');
        const text = this.getAttribute('data-text');
        
        // Отображаем всплывающий блок с информацией, содержащий заголовок и текст
        tooltip.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
        tooltip.style.display = 'block'; // Отображаем блок
    });

    // При движении мыши над элементом
    voivodeship.addEventListener('mousemove', function(e) {
        // Перемещаем всплывающий блок за курсором мыши
        tooltip.style.top = (e.clientY + 20) + 'px';
        tooltip.style.left = (e.clientX + 20) + 'px';
    });

    // При уходе мыши с элемента
    voivodeship.addEventListener('mouseleave', function() {
        // Скрываем всплывающий блок
        tooltip.style.display = 'none';
    });
});
