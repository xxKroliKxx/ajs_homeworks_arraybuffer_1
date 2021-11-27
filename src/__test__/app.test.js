import Magician from '../js/daemon';

test('test get stoned', () => {
    const character = new Magician();
    character.stoned = true;
    expect(character.stoned).toBe(true);
});

test('test stoned false', () => {
  const character = new Magician();
  character.attack = 100;
  character.distance = 2;
  expect(character.attack).toBe(90);
});

test('test stoned true', () => {
  const character = new Magician();
  character.stoned = true;
  character.attack = 100;
  character.distance = 2;
  expect(character.attack).toBe(85);
});

test('test distance exceeded', () => {
  const character = new Magician();
  character.attack = 100;
  character.distance = 11;
  expect(character.attack).toBe(0);
});
