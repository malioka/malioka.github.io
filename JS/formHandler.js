// Объект для хранения данных формы
var formData = {
    status: "",
    name: "",
    email: "",
    message: "",
    topic: "",
    newsletter: false
  };
  
  // Функция для сохранения данных из формы
  function saveFormData() {
    // Получаем значения полей формы
    formData.status = document.querySelector('input[name="status"]:checked').value;
    formData.name = document.getElementById('name').value;
    formData.email = document.getElementById('email').value;
    formData.message = document.getElementById('message').value;
    formData.topic = document.getElementById('topic').value;
    formData.newsletter = document.getElementById('newsletter').checked;
  
    // Выводим сохраненные данные в консоль для проверки
    console.log(formData);
  }
  
  // Функция для отображения сохраненных данных на странице
  function displayData() {
    // Получаем элемент, в который будем выводить данные
    var displayArea = document.getElementById('displayArea');
  
    // Проверяем, есть ли данные для отображения
    if (Object.keys(formData).length === 0) {
      displayArea.innerHTML = "Нет сохраненных данных.";
    } else {
      // Формируем строку с данными
      var dataString = "<p>Статус: " + formData.status + "</p>" +
        "<p>Имя: " + formData.name + "</p>" +
        "<p>Email: " + formData.email + "</p>" +
        "<p>Сообщение: " + formData.message + "</p>" +
        "<p>Тема обращения: " + formData.topic + "</p>" +
        "<p>Подписка на рассылку: " + (formData.newsletter ? "Да" : "Нет") + "</p>";
  
      // Отображаем данные на странице
      displayArea.innerHTML = dataString;
    }
  }
  
  // Обработчик события отправки формы
  document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    // Предотвращаем отправку формы по умолчанию
    event.preventDefault();
  
    // Сохраняем данные из формы
    saveFormData();
  });
  
  // Обработчик события клика по кнопке "Показать данные"
  document.getElementById('showDataButton').addEventListener('click', function () {
    // Отображаем сохраненные данные
    displayData();
  });
  