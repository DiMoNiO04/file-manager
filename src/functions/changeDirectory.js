import { homedir, chdir } from '../utils/common.js'; 

export const changeWorkDirectory = () => chdir( homedir() );