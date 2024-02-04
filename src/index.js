import { changeWorkDirectory } from "./functions/changeDirectory.js";
import { exit } from "./functions/exit.js";
import { showCurrentDirectory, showWelcome } from "./functions/showMeassages.js";

changeWorkDirectory();
showWelcome();
showCurrentDirectory();
exit();