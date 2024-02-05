import { wrapperTryCatch } from "../functions/wrapperTryCatch.js";
import { cwd, resolve, readdir } from "../utils/common.js";

const actionHandleLs = async () => {
  const currDir = resolve(cwd());
  const files = await readdir(currDir);
  console.table(files);
}

export const handleLs = async () => wrapperTryCatch( actionHandleLs );