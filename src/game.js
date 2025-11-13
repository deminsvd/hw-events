export function initMoleGame() {
  let playing = true;
  let activeHole = Math.floor(1 + Math.random() * 16);

  
  
  const getHole = (index) => document.getElementById(`hole${index}`),
        deactivateHole = (index) => getHole(index).className = 'hole',
        activateHole = (index) => getHole(index).className = 'hole hole_has-mole',
        next = () => setTimeout(() => {
          if (!playing) {
            return;
          }
          deactivateHole(activeHole);
          activeHole = Math.floor(1 + Math.random() * 16);
          activateHole(activeHole);
          next();
        }, 1000);

  next();

  return {
    stop: () => { playing = false; },
    start: () => {
      if (!playing) {
        playing = true;
        next();
      }
    }
  };
}