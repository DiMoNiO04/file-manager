import { cwd } from "../utils/common.js";

export const showCurrentDirectory = () => console.log(`You are currently in ${cwd()}`);