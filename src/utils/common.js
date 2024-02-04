import { homedir } from 'os';
import { 
  chdir,
  argv, cwd,
  stdin, stdout,
  exit, nextTick,
  } from 'process';
import readline from 'readline';
import { resolve } from 'path';
import { readdir } from 'fs/promises';

export {
  readline,
  readdir,
  resolve,
  homedir,
  chdir,
  cwd,
  exit,
  nextTick,
  stdin,
  stdout,
  argv,
}