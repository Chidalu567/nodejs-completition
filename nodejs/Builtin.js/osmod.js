//the os module handles anything that has to do with the operating system
const os = require("os"); //require os from the node modules

const userInfo = os.userInfo(); //get the system user infomation
console.log(
  userInfo
); /*{
  uid: 1000,
  gid: 1000,
  username: 'chidalu',
  homedir: '/home/chidalu',
  shell: '/bin/bash'
}*/

const systemTime = os.uptime(); //get the system up time
console.log(systemTime); //442411

const mySystemVersion = os.version(); //gives the system version
console.log(mySystemVersion); //#54~20.04.1-Ubuntu SMP Sat Mar 20 13:40:25 UTC 2021

const systemType = os.type(); //gives my system type
console.log(systemType); //linux
