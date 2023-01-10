// const game = {
//     team1: 'REAL MADRID',
//     team2: 'BARCELONA',
//     players: [
//       [
//         'Courtois',
//         'Vazquez',
//         'Militao',
//         'Nacho',
//         'Mendy',
//         'Casemiro',
//         'Valverde',
//         'Modrich',
//         'Kroos',
//         'Vinicius',
//         'Benzema',
//       ],
//       [
//         'Stegen',
//         'Mingueza',
//         'Araujo',
//         'Lenglet',
//         'Dest',
//         'Busquets',
//         'Jong',
//         'Alba',
//         'Messi',
//         'Pedri',
//         'Dembele',
//       ],
//     ],
//     score: '2:1',
//     scored: ['Kroos', 'Benzema', 'Mingueza'],
//     date: 'Apr 10th, 2021',
//     odds: {
//         team1: 1.48,
//         draw: 2.53,
//         team2: 4.25,
//         },
// };

// task 1//
// let players1 = game.players[0]
// let players2 = game.players[1]
// console.log (players1)
// console.log (players2)

// task 2//
// let [goalkeeper, ...fieldPlayers] = players1
// console.log (goalkeeper)
// console.log (fieldPlayers)

// task 3//

// let allPlayers = [...players1, ...players2]
// console.log (allPlayers)

// task 4//
// let players1Total = [...players1, 'Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola']
// console.log (players1Total)

// task 5//
// let {team1, draw, team2} = game.odds
// console.log (team1, draw, team2)

// task 6//
// function printGoals  (...playersName) {
//     let goals = playersName.length;
//     console.log (...playersName, goals)
// }
// printGoals ('Mingueza', 'Messi', 'Modrich', 'Nacho')
// printGoals (...game.scored)

// task 7//
// team1 < team2 && console.log (`${game.team1} win`);
// team1 > team2 && console.log (`${game.team2} win`)