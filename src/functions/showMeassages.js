import { getUsername } from "./getUsername.js";
import { cwd } from "../utils/common.js";

const showCurrentDirectory = () => console.log(`You are currently in ${cwd()}`);
const showGoodbye = () => console.log(`Thank you for using File Manager, ${getUsername()}, goodbye!`);
const showWelcome = () => console.log(`Welcome to the File Manager, ${getUsername()}`);

export {
  showGoodbye,
  showWelcome,
  showCurrentDirectory
};