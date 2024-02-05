import { chdir } from '../utils/common.js';
import { wrapperTryCatch } from '../functions/wrapperTryCatch.js';

export const handleUp = async () => wrapperTryCatch( chdir, '..' );