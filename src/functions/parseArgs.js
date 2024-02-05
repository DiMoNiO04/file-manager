import { argv } from "../utils/common.js";

export const parseArgs = () => {
  return Object.fromEntries(
    argv.slice(2).map((arg) => {
      const [ key, value ] = arg.split('=');
      return [ key, value ];
    })
  )
};