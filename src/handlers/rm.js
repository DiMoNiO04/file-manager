import { wrapperTryCatch } from "../functions/wrapperTryCatch.js";
import { resolve, rm } from "../utils/common.js";

const actionHandlerDelete = async (file) => {
  const pathToFile = resolve(file);
  await rm(pathToFile);
}

export const handleDelete = async ( [file] ) => wrapperTryCatch( actionHandlerDelete, file );