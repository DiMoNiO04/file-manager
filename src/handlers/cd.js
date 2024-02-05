import { chdir } from '../utils/common.js';
import { wrapperTryCatch } from '../functions/wrapperTryCatch.js';

export const handleCd = async ([ pathToDir ]) => wrapperTryCatch( chdir, pathToDir );