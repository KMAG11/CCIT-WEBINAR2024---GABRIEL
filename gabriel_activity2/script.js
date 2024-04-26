
const value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
const len = 16;
function generatePassword() {
    let password = "";
    for (let i = 0; i < len; i++) {
      const randomNum = Math.floor(Math.random() * value.length);
      password += value.charAt(randomNum);
    }
    return password;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = generatePassword();
    document.getElementById('password').value = password;
  }
  document.getElementById('frmLogin').addEventListener('submit', handleSubmit);

  document.querySelector('#button-addon2').addEventListener('click', function() {
      const passwordInput = document.getElementById('password');
      if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
      } else {
          passwordInput.type = 'password';
      }
  });