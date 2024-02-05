import { homedir, userInfo, cpus, EOL } from 'os';
import { 
  chdir,
  argv, cwd,
  stdin, stdout,
  exit, nextTick,
  arch,
  } from 'process';
import readline from 'readline';
import { pipeline } from 'stream/promises';
import { resolve } from 'path';
import { readdir } from 'fs/promises';
import { Writable } from 'stream';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { rm, open } from 'fs/promises';

export {
  readline,
  Writable,
  open,
  pipeline,
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