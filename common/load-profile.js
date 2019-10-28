import { getUser } from '../data/saveUserApi.js';
import isDead from '../common/is-dead.js';

function loadProfile() {
  /* reference needed DOM elements */
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('ghosts');

  /* initialize: load and parse json with user from local storage */
    const user = getUser();

  // if there's no user
    if (!user) {
    // no user? go back to sign up:
        window.location = './';
    }

  // copy data from object to DOM properties:
    name.textContent = user.name;
    avatar.src = '../assets/avatars/' + user.race + '.png';
    gold.textContent = user.gold;

  // if they're dead, say so in the header
    if (isDead(user)) {
        hp.textContent = 'DOA';
    } else {
    // otherwise show the user hp
        hp.textContent = user.hp;
    }
}

export default loadProfile;
