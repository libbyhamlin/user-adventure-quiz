import { getUser } from '../data/api.js';
import quests from '../data/quest-data.js';
import loadProfile from '../common/load-profile.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';
import hasCompletedAllQuests from '../map/has-completed-all-quest.js';
import isDead from '../common/is-dead.js';

loadProfile(); //stats and name

//grabbing user from local storage
const user = getUser();

//Quest elements from the DOM
const nav = document.getElementById('quests');

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    let questDisplay = null;

    if (user.completed[quest.id]) {
        questDisplay = createCompletedQuest(quest);
    } else {
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay); // This add the quest display to the nav
}
