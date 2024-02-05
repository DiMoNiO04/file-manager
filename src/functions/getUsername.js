import { parseArgs } from "./parseArgs.js";

export const getUsername = () => {
  const args = parseArgs();
  let username = 'Username';

  if(args['--username']) {
    username = args['--username'];
  }
  return username;
}