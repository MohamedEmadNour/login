document.addEventListener('DOMContentLoaded', function () {
    // Check if the user has logged in or signed up successfully
    const loginSuccess = sessionStorage.getItem('loginSuccess');
    const signupSuccess = sessionStorage.getItem('signupSuccess');
  
    // If the user has not logged in or signed up, redirect them to the login page
    if (!loginSuccess && !signupSuccess) {
      window.location.href = 'index.html';
      return;
    }
  
    // Clear the sessionStorage flags to prevent repeated access
    sessionStorage.removeItem('loginSuccess');
    sessionStorage.removeItem('signupSuccess');

    
    var userDataShowName = localStorage.getItem('UserDataName');
    var userDataShowEmail = localStorage.getItem('UserDataEmail');

//sing up datacheck
    var newUserDataName = localStorage.getItem('NewUserDataName');
    var newUserDataEmail = localStorage.getItem('NewUserDataEmail');
  
    // Clear new user data from localStorage
    localStorage.removeItem('NewUserDataName');
    localStorage.removeItem('NewUserDataEmail');
// data useer showing
    if (newUserDataName && newUserDataEmail) {
      document.getElementById('UserNamedatashow').value = newUserDataName;
      document.getElementById('UserEmaldatashow').value = newUserDataEmail;
    } else {
      document.getElementById('UserNamedatashow').value = userDataShowName;
      document.getElementById('UserEmaldatashow').value = userDataShowEmail;
    }
  });

document.querySelector(`#SingOut`).addEventListener( `click` , function (params) {
    
    localStorage.removeItem('UserDataName');
    localStorage.removeItem('UserDataEmail');

  window.open(`./index.html`, `_self`);
  
})
  
  