
// Singup part
var UserNameSingup = document.getElementById("UserNameSingup");
var UserEmailSingup = document.getElementById("UserEmailSingup");
var UserPasswordSingup = document.getElementById("UserPasswordSingup");
// Login vars
var UserEmailSingin = document.getElementById("UserEmailSingin");
var UserPasswordSingin = document.getElementById("UserPasswordSingin");



var UserDataSingup = [];

if (localStorage.getItem('Login') !== null) {
  UserDataSingup = JSON.parse(localStorage.getItem('Login'));
}

function SaveUserDataSingup() {
  var UserNameSingupValue = UserNameSingup.value.trim();
  var UserEmailSingupValue = UserEmailSingup.value.trim();
  var UserPasswordSingupValue = UserPasswordSingup.value.trim();

  // Validate the name: Check if it contains at least two words
  var nameWords = UserNameSingupValue.split(' ');
  if (nameWords.length < 2) {
    showPopup('Name must contain at least two words.');
    return;
  }

  // Validate the email: Check if it matches the pattern @any.any
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(UserEmailSingupValue)) {
    showPopup('Invalid email format. Please use the format "yourname@example.com".');
    return;
  }

  // Check if the email is already in the data
  for (let i = 0; i < UserDataSingup.length; i++) {
    if (UserDataSingup[i].Email === UserEmailSingupValue) {
      showPopup('This email is already signed up. Please use a different email.');
      return;
    }
  }

  // Validate the password: Check if it has at least 10 characters
  if (UserPasswordSingupValue.length < 10) {
    showPopup('Password must have at least 10 characters.');
    return;
  }

  var UserDataSingupSaved = {
    Name: UserNameSingupValue,
    Email: UserEmailSingupValue,
    Password: UserPasswordSingupValue,
  };

  if (UserDataSingupSaved.Name && UserDataSingupSaved.Email && UserDataSingupSaved.Password !== '') {
    UserDataSingup.push(UserDataSingupSaved);
    ResetInputValue();
    showPopup('Signup successful!');
    localStorage.setItem('Login', JSON.stringify(UserDataSingup));
    
    Sttingdata( UserDataSingupSaved.Email , UserDataSingupSaved.Name )

    // Set sessionStorage flag to indicate successful signup
    sessionStorage.setItem('signupSuccess', 'true');

    openLink('userpage.html'); // Navigate to the userpage after signup
  }
}

function openLink(linkUrl) {
  const newTab = '_self';
  window.open(linkUrl, newTab);
}

function showPopup(message) {
  const popup = document.getElementById('popup');
  popup.innerHTML = message;
  popup.style.display = 'block';

  setTimeout(function () {
    popup.style.display = 'none';
  }, 1500);
  delayedOpenLink();
}

function delayedOpenLink() {
  setTimeout(openLink, 1500);
}

function ResetInputValue() {
  UserNameSingup.value = '';
  UserEmailSingup.value = '';
  UserPasswordSingup.value = '';
}

function Login(Email, Password) {
  Email = UserEmailSingin.value;
  Password = UserPasswordSingin.value;

  for (let i = 0; i < UserDataSingup.length; i++) {
    if (UserDataSingup[i].Email == Email && UserDataSingup[i].Password == Password) {
      var UserDataEntryEmail = Email;
      var UserDataEntryName = UserDataSingup[i].Name;

      Sttingdata( UserDataEntryEmail , UserDataEntryName )

      // Set sessionStorage flag to indicate successful login
      sessionStorage.setItem('loginSuccess', 'true');

      openLink('userpage.html');
      return;
    }
  }

  LoginShowPopup('Invalid email or password');
}

function Sttingdata( UserDataEntryEmail , UserDataEntryName ) {
  localStorage.setItem('UserDataEmail', UserDataEntryEmail);
  localStorage.setItem('UserDataName', UserDataEntryName);
}

function LoginShowPopup(x) {
  var y = `top: 45%; right: 50%; color: White; `;
  const popup = document.getElementById('popup');
  popup.innerHTML = x;
  popup.style = y;
  popup.style.backgroundColor = ` #e616166e `;
  popup.style.display = 'block';

  setTimeout(function () {
    popup.style.display = 'none';
  }, 1500);
}


