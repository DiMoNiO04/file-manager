import { wrapperTryCatch } from "../functions/wrapperTryCatch.js";
import { createBrotliCompress, createReadStream, createWriteStream, parse, pipeline, resolve } from "../utils/common.js";

const actionHandleCompress = async ( [file, pathDest] ) => {
  const pathInp = resolve(file);
  const { base } = parse(pathInp);
  const fileName = `${base}.br`
  const pathOut = resolve(pathDest, fileName);

  const readStream = createReadStream(pathInp);
  const outStream = createWriteStream(pathOut);
  const compress = createBrotliCompress();

  await pipeline(readStream, compress, outStream);

}

export const handleCompress = async ( [ file, pathDest ] ) => wrapperTryCatch( actionHandleCompress, [ file, pathDest ] );