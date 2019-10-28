const librarian = {
    id: 'librarian',
    title: 'Ghostly Librarian',
    map: {
        top: '85%',
        left: '38%'
    },
    image: 'librarian.png',
    img: 'quest-librarian.png',

    description:
    'A librarian at the New York Public Library  fainted after seeing a ghostly figure in the stacks. You suspect the entity is a Free-Roaming, Vaporous, Full Torso Apparition. You make your way down to the basement where you see a floating, footless figure. She appears to be reading. How do you proceed?',

    choices: [
        {
            id: 'negotiate',
            description: 'Talk to her',
            result: "Hush, she's reading.",
            hp: 0,
            ghosts: 0
        },
        {
            id: 'fight',
            description: 'Get her!',
            result:
        "You have no idea what you're doing, so you try to attack her with your physical body. She transfoms into a terryifying apparition and you run screaming from the building. You don't get the ghost, and you hurt your pride.",
            hp: -5,
            ghosts: 0
        },
        {
            id: 'run',
            description: 'Skedaddle',
            result:
        'You back slowly out of the stacks and resolve to get yourself a proton pack.',
            hp: 0,
            ghosts: 0
        }
    ]
};

const slimer = {
    id: 'slimer',
    title: 'Slimer',
    map: {
        top: '58%',
        left: '35%'
    },
    image: 'slimer.png',
    img: 'quest-slimer.png',

    description:
    "You are called to the Sedgewick Hotel, where the manager reports a series of paranormal disturbances. On the 12th floor, you encounter a an ugly little spud: Slimer. You succesfully test your new proton packs by blasting a maid's cart.  Slimer barricades himself in the hotel ballroom.  Do you head back to headquarters for more equipment, wait for the little guy to come back out, or enter the ballroom, destroy as much stuff as possible with erratic proton back blasts, and try and capture slimer in a ghost trap?",
    choices: [
        {
            id: 'run',
            description: 'Run. away.',
            result:
        "Slimer dissapears in your absence.  But by the time you get back the hotel it's Happy Hour.",
            hp: 20,
            ghosts: 0
        },
        {
            id: 'negotiate',
            description: 'Wreck the room',
            result:
        'Slimer lays waste to the ballroom, then disapparates. The hotel manager personally disinvites you from Happy Hour.',
            hp: -20,
            ghosts: 0
        },
        {
            id: 'fight',
            description: 'Do, Ray, Egon!',
            result:
        'You entrap a a focused, non-terminal repeating phantasm, or a Class Five full roaming vapor. Real nasty one, too! The hotel manager rewards you with steak tartare and a flight of single malt Scotches.',
            hp: 35,
            ghosts: 20
        }
    ]
};

const marshmallow = {
    id: 'marshmallow',
    title: 'Battle of Stay Puft!',
    map: {
        top: '32%',
        left: '53%'
    },
    image: 'marshmallow.png',
    img: 'quest-puft.png',

    description:
    'Mother Puft Bucket! You thought the enemies were defeated and your fighting was done. But NAY!! You were wrong. You tried to think of the most harmless thing I could think of. Something you loved from your childhood. Behold! Stay Puft! Everyone is terrified beyond the point of rational thought. What do you do???????????',
    choices: [
        {
            id: 'negotiate',
            description: 'Reason with monster',
            result:
        "Sorry, Puft is out to take over the world and you were wrong to think he was reasonable. You were crushed under the consuming size of Puft. All HP depleted and you died. Sorry not sorry. I'd say take this as a life lesson, but you're no longer alive. You tried to reason with a monster.",
            hp: -30,
            ghosts: 0
        },
        {
            id: 'run',
            description: 'Abandon all hope',
            result:
        "That was close!!! Stay Puft is big but not fast! Peter and Raymond got away, but let's not talk about Egon...",
            hp: -35,
            ghosts: 0
        },
        {
            id: 'fight',
            description: 'Fight!!!!',
            result:
        'Congratulations!!! You defeated Stay Puft!!! The enemy was slain and the hero has won! You are now the town heros! You saved everybody from a large, dangerous marshmallow.',
            hp: 0,
            ghosts: 1000000
        }
    ]
};

const quests = [librarian, slimer, marshmallow];

export default quests;
