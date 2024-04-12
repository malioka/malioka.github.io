function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMessage = "";
  
    if (name.trim() === '') {
      errorMessage += 'Пожалуйста, введите ваше имя.\n';
    }
  
    if (email.trim() === '') {
      errorMessage += 'Пожалуйста, введите ваш email.\n';
    } else if (!isValidEmail(email)) {
      errorMessage += 'Пожалуйста, введите корректный email.\n';
    }
  
    if (message.trim() === '') {
      errorMessage += 'Пожалуйста, введите ваше сообщение.\n';
    }
  
    if (errorMessage !== '') {
      alert(errorMessage);
      return false;
    }
  
    return true;
  }
  
  function isValidEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  