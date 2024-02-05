import { wrapperTryCatch } from "../functions/wrapperTryCatch.js";
import { 
  createReadStream, 
  createWriteStream, 
  parse, 
  pipeline, 
  resolve 
} from "../utils/common.js";

const actionHandleCp = async ( [file, newDir] ) => {
  const pathToFile = resolve( file );
  const { base } = parse(pathToFile)
  const pathToDir = resolve( newDir, base );
  
  const readableStream = createReadStream( pathToFile );
  const writableStream = createWriteStream( pathToDir );

  await pipeline(readableStream, writableStream);
}

export const handleCp = async ( [file, newDir] ) => wrapperTryCatch( actionHandleCp, [ file, newDir ] );