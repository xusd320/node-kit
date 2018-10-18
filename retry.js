'use strict';

class retry{
 constructor() {}
 
 static async attempt(maxRetryTimes, func, ...args) {
  var retryTimes = 0;
  var resolved   = false;
  var running    = false;
  var ret;
  
  do {
    if(!resolved && !running) {
     retryTimes ++;
     running = true;
     
     if(retryTimes > maxRetryTimes) {
      console.log('Failed, maxRetryTimes reached !');
      resolved = true;
      return ret;
     }
     
     console.log(`Retry time = ${retryTimes} , maxRetryTimes = ${maxRetryTimes}`);
     
     await func(...args).then(result ={
      running = false;
      resolved = true;
      ret = result;
     }, err => {
       running = false;
       console.log('Failed, retry again !');
     });
    } else {
      return ret;
    }
  } while(1);
 }
};

module.exports = retry;
