localStorage.removeItem('UserDataName');
localStorage.removeItem('UserDataEmail');

document.addEventListener(`keyup` , function (e) {

    if ( e.code == `NumpadEnter` || e.code == `Enter`) {
        SaveUserDataSingup()
    }
   
  })