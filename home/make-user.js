function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        hp: 40,
        gold: 0,
        completed: {}
    };

    return user;
}

export const newMakerUser = formData => ({
    name: formData.get('name'),
    race: formData.get('race'),
    hp: 40,
    gold: 0,
    completed: {}
});

export default makeUser;
