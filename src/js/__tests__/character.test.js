import { Character } from "../character";

test('should create character', () => {
  const char = new Character('Лучник', 'Bowman');
  const result = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  }
  expect(char).toEqual(result);
});
