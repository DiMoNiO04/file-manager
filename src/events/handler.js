import { showCurrentDirectory, showWelcome } from '../functions/showMeassages.js';
import { handleCd } from '../handlers/cd.js';
import { handleUp } from '../handlers/up.js';
import { INVALID_INPUT } from '../utils/consts.js';

export const handleEvents = (event) => {
  let [command, ...args] = event.split(' ');

  switch (command) {
    case 'start': {
      showWelcome();
      showCurrentDirectory();
      break;
    }
    case 'up': {
      handleUp();
      break;
    }
    case 'cd': {
      handleCd(args);
      break;
    }
    default: {
      console.log(INVALID_INPUT);
    }
  }
}
