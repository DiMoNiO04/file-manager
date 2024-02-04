import { changeWorkDirectory } from "./functions/changeDirectory.js";
import { handleEvents } from "./events/handler.js";
import { START } from "./utils/consts.js";
import { actionRL } from './events/rl.js';

changeWorkDirectory();
handleEvents(START);
actionRL();