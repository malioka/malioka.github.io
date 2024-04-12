// Функция для валидации формы перед отправкой данных
function validateForm() {
    // Получаем значения полей формы
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMessage = ""; // Переменная для сохранения сообщений об ошибках
  
    // Проверяем поле имени
    if (name.trim() === '') {
      errorMessage += 'Пожалуйста, введите ваше имя.\n';
    }
  
    // Проверяем поле email
    if (email.trim() === '') {
      errorMessage += 'Пожалуйста, введите ваш email.\n';
    } else if (!isValidEmail(email)) { // Проверяем валидность email
      errorMessage += 'Пожалуйста, введите корректный email.\n';
    }
  
    // Проверяем поле сообщения
    if (message.trim() === '') {
      errorMessage += 'Пожалуйста, введите ваше сообщение.\n';
    }
  
    // Если есть ошибки, выводим их в виде предупреждения и предотвращаем отправку формы
    if (errorMessage !== '') {
      alert(errorMessage);
      return false;
    }
  
    // Если ошибок нет, возвращаем true, разрешая отправку формы
    return true;
}

// Функция для проверки валидности email с использованием регулярного выражения
function isValidEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Регулярное выражение для проверки email
    return regex.test(email); // Возвращает true, если email соответствует шаблону
}
