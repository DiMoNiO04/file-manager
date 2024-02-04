import { showCurrentDirectory, showWelcome } from '../functions/showMeassages.js';
import { INVALID_INPUT } from '../utils/consts.js';

export const handleEvents = (event) => {
  switch (event) {
    case 'start': {
      showWelcome();
      showCurrentDirectory();
      break;
    }
    case 'up': {
      console.log('Вызван обработчик для команды up');
      break;
    }
    default: {
      console.log(INVALID_INPUT);
    }
  }
}
