// import giveMeAJoke from 'give-me-a-joke';
//
// giveMeAJoke.getRandomJokeOfTheDay( (joke) => {
//     console.log("De grap van vandaag " + joke);
// });

import axios from 'axios';

async function fetchJoke() {
    try {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log(result);
    } catch(e) {
        console.error(e);
    }
}

fetchJoke();

console.log("test")