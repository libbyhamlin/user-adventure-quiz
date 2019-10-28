import loadProfile from '../common/load-profile.js';
import { getUser, saveUser } from '../data/saveUserApi.js';
import quests from '../data/quest-data.js';
import createChoice from './create-choice.js';
import findById from '../common/find-by-id.js';
import scoreQuest from './score-quest.js';

loadProfile();

// go grab the query parameter from the URL
const searchParams = new URLSearchParams(window.location.search);
// go get the quest id from the URL
const questId = searchParams.get('id');
// go use old faithful to find our quest
const quest = findById(quests, questId);

// if there's no such quest 
if (!quest) {
    window.location = '../map';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const audio = document.getElementById('audio');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

// use the quest that we found to populate the dom
title.textContent = quest.title;
image.src = '../assets/quests/' + quest.image;
audio.src = '../assets/quests/' + quest.audio;
description.textContent = quest.description;

// for each of the quest's choices
for (let index = 0; index < quest.choices.length; index++) {
    const choice = quest.choices[index];
    // go make a choice dom element
    const choiceDOM = createChoice(choice);
    // and append that choice
    choices.appendChild(choiceDOM);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // get user choice
    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    // use old faitful to find the choice
    const choice = findById(quest.choices, choiceId);

    // get user out of local storage
    const user = getUser();
    // generate a score and manipulate user state
    scoreQuest(choice, quest.id, user);
    // save user
    saveUser(user);

    // update UI
    audio.src = '../assets/quests/' + quest.action;
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;
    // reload profile for new stats
    loadProfile();

});
