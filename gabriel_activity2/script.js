
const value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
const len = 16;
function genPass() {
    let password = "";
    for (let i = 0; i < len; i++) {
      const randomNum = Math.floor(Math.random() * value.length);
      password += value.charAt(randomNum);
    }
    return password;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = genPass();
    document.querySelector('#password').value = password;
  }
  document.querySelector('#frmLogin').addEventListener('submit', handleSubmit);

  document.querySelector('#button-addon2').addEventListener('click', function() {
      const passwordInput = document.querySelector('#password');
      if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
      } else {
          passwordInput.type = 'password';
      }
  });

  // SUBMITTED BY KIARA GABRIEL