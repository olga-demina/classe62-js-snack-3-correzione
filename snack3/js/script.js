// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const teams = [
    { 
        nome: 'PSG',
        puntiFatti: 0,
        falliSubiti: 0 
    },
    { 
        nome: 'Ajax',
        puntiFatti: 0,
        falliSubiti: 0 
    },
    { 
        nome: 'Manchester City',
        puntiFatti: 0,
        falliSubiti: 0
    },
    { 
        nome: 'Real Madrid',
        puntiFatti: 0,
        falliSubiti: 0
    }
];


teams.forEach( team => {
    const rndPunti = getRndInteger(0,100);
    const rndFalli = getRndInteger(0,100);

    team.puntiFatti = rndPunti;
    team.falliSubiti = rndFalli;
});

console.log(teams);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}