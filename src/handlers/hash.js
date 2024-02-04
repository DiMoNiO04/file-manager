import { wrapperTryCatch } from "../functions/wrapperTryCatch.js"
import { createHash, createReadStream, resolve } from "../utils/common.js";

const actionHandleHash = async ( file ) => {
  const pathToFile = resolve(file);
  const hash = createHash('sha256');
  const stream = createReadStream(pathToFile);
  stream.pipe(hash).on('finish', () => console.log(hash.digest('hex')));
}

export const handleHash = async ( [file] ) => wrapperTryCatch( actionHandleHash, file );