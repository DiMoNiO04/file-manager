import { ERROR_MSG } from '../utils/consts.js'
import { showCurrentDirectory } from '../functions/showMeassages.js';
import { chdir } from '../utils/common.js';

export const handleUp = async () => {
  try {
    chdir('..');
    showCurrentDirectory();
  } catch (error) {
    console.error(ERROR_MSG)
  }
}