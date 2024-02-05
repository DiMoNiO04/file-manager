import { wrapperTryCatch } from "../functions/wrapperTryCatch.js";
import { writanleOutput } from "../functions/writable.js";
import { createReadStream, pipeline, resolve } from "../utils/common.js";

const actionHandleCat = async ( file ) => {
  const pathToFile = resolve( file );
  const readableStream = createReadStream( pathToFile, { encoding : 'utf8' } );
  await pipeline( readableStream,  writanleOutput() );
}

export const handleCat = async ( [file] ) => wrapperTryCatch( actionHandleCat, file );