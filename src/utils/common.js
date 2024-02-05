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
import { resolve, parse } from 'path';
import { readdir } from 'fs/promises';
import { Writable } from 'stream';
import { createHash } from 'crypto';
import { createReadStream, createWriteStream } from 'fs';
import { rm, open, rename } from 'fs/promises';

export {
  readline,
  Writable,
  open,
  rename,
  pipeline,
  createHash,
  parse,
  createReadStream,
  createWriteStream,
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