function scoreQuest(choice, questId, user) {
    user.hp += choice.hp;
    user.ghosts += choice.ghosts;
    user.completed[questId] = true;
}

export default scoreQuest;
