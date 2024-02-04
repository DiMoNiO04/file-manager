import { ERROR_MSG } from '../utils/consts.js'
import { showCurrentDirectory } from '../functions/showMeassages.js';
import { chdir } from '../utils/common.js';

export const handleCd = async ([ pathToDir ]) => {
  try {
    chdir(pathToDir);
    showCurrentDirectory();
  } catch (error) {
    console.error(ERROR_MSG)
  }
}