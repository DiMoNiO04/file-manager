import { ERROR_MSG } from "../utils/consts.js";
import { showCurrentDirectory } from "./showMeassages.js";

export const wrapperTryCatch = (action, description = '') => {
  try {
    if(description) {
      action(description);
    } else {
      action();
    };

    showCurrentDirectory();
  } catch (error) {
    console.error(ERROR_MSG);
  }
}
