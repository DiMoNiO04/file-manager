import { showCurrentDirectory, showWelcome } from '../functions/showMeassages.js';
import { handleCd } from '../handlers/cd.js';
import { handleDelete } from '../handlers/rm.js';
import { handleHash } from '../handlers/hash.js';
import { handleLs } from '../handlers/ls.js';
import { handleUp } from '../handlers/up.js';
import { INVALID_INPUT } from '../utils/consts.js';
import { handleOs } from '../handlers/os.js';
import { handleCat } from '../handlers/cat.js';
import { handleAdd } from '../handlers/add.js';
import { handleRename } from '../handlers/rn.js';
import { handleCp } from '../handlers/cp.js';
import { handleMv } from '../handlers/mv.js';
import { handleCompress } from '../handlers/compress.js';
import { handleDecompress } from '../handlers/decompress.js';

export const handleEvents = (event) => {
  let [command, ...args] = event.split(' ');

  switch (command) {
    case 'start' : {
      showWelcome();
      showCurrentDirectory();
      break;
    }
    case 'up' : {
      handleUp();
      break;
    }
    case 'cd' : {
      handleCd( args );
      break;
    }
    case 'ls' : {
      handleLs( args );
      break;
    }
    case 'cat' : {
      handleCat( args );
      break;
    }
    case 'add' : {
      handleAdd( args );
      break;
    }
    case 'cp' : {
      handleCp( args );
      break;
    }
    case 'mv' : {
      handleMv( args );
      break;
    }
    case 'rn' : {
      handleRename( args );
      break;
    }
    case 'rm' : {
      handleDelete( args );
      break;
    }
    case 'os' : {
      handleOs( args );
      break;
    }
    case 'hash' : {
      handleHash( args );
      break;
    }
    case 'compress' : {
      handleCompress( args );
      break;
    }
    case 'decompress' : {
      handleDecompress( args );
      break;
    }
    default : {
      console.log( INVALID_INPUT );
    }
  }
}
