import { saveUser } from '../data/saveUserApi.js';
import makeUser from '../home/make-user.js';

const userSignUp = document.getElementById('user-sign-up');

//when user hits sumbit button
userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(userSignUp);
    const user = makerUser(formData);

  //this puts user into local storage?
    saveUser(user);

    window.location = 'map';
});
