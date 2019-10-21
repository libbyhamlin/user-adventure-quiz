const monsters = {
id:'puft-battle',
title: "The Battle of Stay Puft!"
image: '',
audio: '',
description: '
Mother Puft Bucket! You thought the enemies were defeated and your fighting was done. But NAY!! You were wrong. You tried to think of the most harmless thing I could think of. Something you loved from your childhood. Behold! Stay Puft! Everyone is terrified beyond the point of rational thought. What do you do???????????"
'

};

choices: [{
id: 'negotiate-puft',
description: 'Try to talk Stay Puft down to size',
result: 'Sorry, Puft is out to take over the world and you were wrong to think he was reasonable. You were crushed under the consuming size of Puft. All HP depleted and you died. Sorry not sorry. I'd say take this as a life lesson, but you're no longer alive. You tried to reason with a monster.'
hp: -100,
gold: 0,
}, {
id: 'run-puft',
description: 'Run away and make a plan!!!!',
result: 'That was close!!! Stay Puft is big but not fast! Peter and Raymond got away, but let's not talk about Egon...'
hp: -50,
gold: 0,
}, {
id: 'fight-puft',
description: 'Fight Stay Puft!!!!',
result: 'Congratulations!!! You defeated Stay Puft!!! The enemy was slain and the hero has won! You are now the town heros! You saved everybody from a large, dangerous marshmallow.'
hp: 0,
gold: 1,000,000,  
}

