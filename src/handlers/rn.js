import { wrapperTryCatch } from "../functions/wrapperTryCatch.js";
import { rename, resolve } from "../utils/common.js";

const actionHandleRn = async ( [oldFile, newFile] ) => {
  const oldFileName = resolve( oldFile );
  const newFileName = resolve( newFile );
  await rename( oldFileName, newFileName );
}

export const handleRename = async ( [ oldFile, newFile ] ) => wrapperTryCatch( actionHandleRn, [ oldFile, newFile ] );