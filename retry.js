'use strict';

class retry{
 constructor(ctx) {
   this.ctx = ctx;
 }
 
 async attempt(maxRetryTimes, func, ...args) {
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
      throw new Error(ret);
     }
     
     let fun = this.ctx ? this.ctx[func].bind(this.ctx) : func;

     console.log(`try times ${retryTimes}, max ${maxRetryTimes}`);
     await fun(...args).then(result => {
      running = false;
      resolved = true;
      ret = result;
     }, err => {
       ret = err;
       running = false;
       console.log(`Failed for reason :  ${err}, try again !`);
     });
    } else {
      return ret;
    }
  } while(1);
 }
};

module.exports = retry;
