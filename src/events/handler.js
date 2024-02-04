import { showCurrentDirectory, showWelcome } from '../functions/showMeassages.js';
import { handleUp } from '../handlers/up.js';
import { INVALID_INPUT } from '../utils/consts.js';

export const handleEvents = (event) => {
  switch (event) {
    case 'start': {
      showWelcome();
      showCurrentDirectory();
      break;
    }
    case 'up': {
      handleUp();
      break;
    }
    default: {
      console.log(INVALID_INPUT);
    }
  }
}
