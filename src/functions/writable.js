import { Writable } from "../utils/common.js";

export const writanleOutput = () => {
  return new Writable({
    decodeStrings: false,
    write(chunk, _, callback) {
      console.log(chunk);
      callback();
    }
  })
}