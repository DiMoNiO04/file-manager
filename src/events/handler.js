import { showCurrentDirectory, showWelcome } from '../functions/showMeassages.js';
import { INVALID_INPUT } from '../utils/consts.js';
import {
  handleAdd,
  handleCat,
  handleCd,
  handleCompress,
  handleCp,
  handleDecompress,
  handleDelete,
  handleHash,
  handleLs,
  handleMv,
  handleOs,
  handleRename,
  handleUp
} from '../handlers/index.js';

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
