import { wrapperTryCatch } from "../functions/wrapperTryCatch.js";
import { 
  createReadStream, 
  createWriteStream, 
  parse, 
  pipeline, 
  resolve, 
  rm 
} from "../utils/common.js";

const actionHandleMv = async ( [file, newDir] ) => {
  const pathToFile = resolve( file );
  const { base } = parse(pathToFile)
  const pathToDir = resolve( newDir, base );
  
  const readableStream = createReadStream( pathToFile );
  const writableStream = createWriteStream( pathToDir );

  await pipeline(readableStream, writableStream);
  await rm(pathToFile);
}

export const handleMv = async ( [file, newDir] ) => wrapperTryCatch( actionHandleMv, [ file, newDir ] );