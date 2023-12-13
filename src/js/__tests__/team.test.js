import { Team } from "../team";
import { Character } from "../character";

test('should generate next character 1st', () => {
  let char1 = new Character('Лучник1', 'Bowman');
  let char2 = new Character('Лучник2', 'Bowman');
  let char3 = new Character('Лучник3', 'Bowman');
  let char4 = new Character('Лучник4', 'Bowman');
  let team = new Team (char1, char2, char3, char4);

  const data = team[Symbol.iterator]();
  let next = data.next();

  let result = {value: char1, done: false}
  expect(next).toEqual(result);
});

test('should generate next character 4th', () => {
  let char1 = new Character('Лучник1', 'Bowman');
  let char2 = new Character('Лучник2', 'Bowman');
  let char3 = new Character('Лучник3', 'Bowman');
  let char4 = new Character('Лучник4', 'Bowman');
  let team = new Team (char1, char2, char3, char4);

  const data = team[Symbol.iterator]();
  data.next();
  data.next();
  data.next();
  let next = data.next();

  let result = {value: char4, done: true}
  expect(next).toEqual(result);
});
