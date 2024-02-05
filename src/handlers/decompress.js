import { wrapperTryCatch } from "../functions/wrapperTryCatch.js";
import { 
  createBrotliDecompress, 
  createReadStream, 
  createWriteStream, 
  parse, 
  pipeline, 
  resolve 
} from "../utils/common.js";

const actionHandleDecompress = async ( [file, pathDest] ) => {
  const pathInp = resolve(file);
  const { name } = parse(pathInp);
  const pathOut = resolve(pathDest, name);

  const readStream = createReadStream(pathInp);
  const outStream = createWriteStream(pathOut);
  const decompress = createBrotliDecompress();

  await pipeline(readStream, decompress, outStream);

}

export const handleDecompress = async ( [ file, pathDest ] ) => wrapperTryCatch( actionHandleDecompress, [ file, pathDest ] );