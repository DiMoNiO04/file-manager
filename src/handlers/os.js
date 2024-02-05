import { wrapperTryCatch } from "../functions/wrapperTryCatch.js";
import { userInfo, arch, cpus, EOL } from "../utils/common.js";

const getUsername = () => userInfo()['username'];
const getHomedir = () => userInfo()['homedir'];
const getEOL = () => JSON.stringify(EOL);
const getArch = () => arch;
const getCpus = () => {
  return cpus().map(({ model, speed }) => {
    speed = `${speed / 1000}GHz`;
    return { model, speed };
  })
}

const actionHadleOs = async (event) => {
  switch(event) {
    case '--cpus' : {
      console.table( getCpus() );
      break;
    }
    case '--EOL' : {
      console.table( getEOL() );
      break;
    }
    case '--homedir' : {
      console.log( getHomedir() );
      break;
    }
    case '--username' : {
      console.log( getUsername() );
      break;
    }
    case '--architecture' : {
      console.log( getArch() );
      break;
    }
    default : {
      console.log(INVALID_INPUT);
    }
  }
}

export const handleOs = async ( [event] ) => wrapperTryCatch (actionHadleOs, event);