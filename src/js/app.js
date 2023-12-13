// TODO: write your code here
import { Team } from "./team";
import { Character } from "./character";

console.log('worked');


let char1 = new Character('Лучник1', 'Bowman');
let char2 = new Character('Лучник2', 'Bowman');
let char3 = new Character('Лучник3', 'Bowman');
let char4 = new Character('Лучник4', 'Bowman');

const team = new Team (char1, char2, char3, char4);
const data = team[Symbol.iterator]();
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
