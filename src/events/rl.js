import { stdin, stdout, readline } from '../utils/common.js';
import { showCurrentDirectory, showGoodbye } from '../functions/showMeassages.js';
import { handleEvents } from './handler.js';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

export const actionRL = () => {
  rl.on('line', (input) => {
    if (input.trim() === '.exit') {
      rl.close();
      return;
    }

    handleEvents(input.trim());
  });

  rl.on('close', () => {
    showGoodbye();
    showCurrentDirectory();
    process.exit(0);
  });
}