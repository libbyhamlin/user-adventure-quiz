import { saveUser } from '../data/saveUserApi.js';
import makeUser from './make-user.js';

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(userSignUp);
    const user = makeUser(formData);

  // pop that user in local storage
    saveUser(user);

  // redirect us to the map page
    window.location = 'map';
});
