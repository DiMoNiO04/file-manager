import { ERROR_MSG } from "../utils/consts.js";
import { showCurrentDirectory } from "./showMeassages.js";

export const wrapperTryCatch = async (action, description = '') => {
  try {
    await action(description);
    showCurrentDirectory();
  } catch (error) {
    console.error(ERROR_MSG);
  }
}
