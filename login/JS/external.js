// Функция, которая будет вызываться при клике на ссылку "Открыть новое окно"
function openNewWindow() {
    // Открываем новое окно с пустым URL и заданными размерами
    const newWindow = window.open('', 'NewWindow', 'width=400,height=200');
    // Записываем текст в новое окно
    newWindow.document.write('<h1>Привет, это новое окно!</h1>');
}
