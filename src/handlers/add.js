import { showCurrentDirectory } from "../functions/showMeassages.js";
import { cwd, open, resolve } from "../utils/common.js";
import { ERROR_MSG } from "../utils/consts.js";

export const handleAdd = async ( [file] ) => {
  let filehandle;

  try {
    const pathToFile = resolve(cwd(), file);
    filehandle = await open(pathToFile, 'w');
    showCurrentDirectory();
  } catch (error) {
    console.error( ERROR_MSG );
  } finally {
    filehandle?.close();
  }
}