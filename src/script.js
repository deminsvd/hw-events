import { initMoleGame } from './game.js';
import { getHole } from './gethole.js';
import { checkhole } from './checkhole.js';
import { setupCursorChange } from './hammer.js';


const game = initMoleGame();
game.start();
setupCursorChange();


for (let index = 1; index <= 4; index++) {
  const hole = getHole(index)
  if (checkhole(hole)) {
    game.stop();
    game.start();
  }
}

