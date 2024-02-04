import { parseArgs } from "./parseArgs.js";

export const showWelcome = () => {
  const args = parseArgs();
  let username = 'Username';

  if(args['--username']) {
    username = args['--username'];
  }

  console.log(`Welcome to the File Manager, ${username}`)
}