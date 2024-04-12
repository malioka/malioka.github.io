const tooltip = document.querySelector('.tooltip');
const voivodeships = document.querySelectorAll('.book');

voivodeships.forEach(voivodeship => {
    voivodeship.addEventListener('mouseenter', function() {
        const title = this.getAttribute('data-title');
        const text = this.getAttribute('data-text');
        
        // Отобразить всплывающий блок с информацией
        tooltip.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
        tooltip.style.display = 'block';
    });

    voivodeship.addEventListener('mousemove', function(e) {
        // Переместить всплывающий блок за курсором мыши
        tooltip.style.top = (e.clientY + 20) + 'px';
        tooltip.style.left = (e.clientX + 20) + 'px';
    });

    voivodeship.addEventListener('mouseleave', function() {
        // Скрыть всплывающий блок при уходе курсора с элемента
        tooltip.style.display = 'none';
    });
});
