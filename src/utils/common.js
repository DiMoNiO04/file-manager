import { homedir, userInfo, cpus, EOL } from 'os';
import { 
  chdir,
  argv, cwd,
  stdin, stdout,
  exit, nextTick,
  arch,
  } from 'process';
import readline from 'readline';
import { resolve } from 'path';
import { readdir } from 'fs/promises';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { rm } from 'fs/promises';

export {
  readline,
  createHash,
  createReadStream,
  userInfo,
  cpus,
  readdir,
  resolve,
  homedir,
  chdir,
  cwd,
  exit,
  nextTick,
  rm,
  stdin,
  stdout,
  argv,
  arch,
  EOL,
}