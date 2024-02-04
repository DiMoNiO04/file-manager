import readline from 'readline';
import { showGoodbye } from './showMeassages.js';
import { stdin, stdout } from '../utils/common.js';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

rl.on('line', (input) => {
  if (input.trim() === '.exit') {
    rl.close();
  } 
});

export const exit = () => {
  rl.on('close', () => {
    showGoodbye();
    process.exit(0);
  });
}