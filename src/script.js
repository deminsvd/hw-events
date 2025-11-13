import { initMoleGame } from './game.js';
import { getHole } from './gethole.js';
import { checkhole } from './checkhole.js';
import { setupCursorChange } from './hammer.js';

const size = 16;
const gameField = document.getElementById('hole-game');
console.log(gameField);
for (let r = 0; r < size; r++) {
  const cell = document.createElement('div');
  cell.className = 'hole';
  cell.id = 'hole' + r;
  gameField.append(cell);
}

const game = initMoleGame();
game.start();
setupCursorChange();


for (let index = 1; index <= 16; index++) {
  const hole = getHole(index)
  if (checkhole(hole)) {
    game.stop();
    game.start();
  }
}

