'use strict';

const retry = require('../index.js').retry;

/*
let a = 0

async function reach(aim) {
 if(a === aim) return 'aim reached';
 console.log(`a = ${a}`);
 a ++;
 await new Promise((resolve, reject) => setTimeout(() => reject('not reach'), 1000));
}

let Retry = new retry();

Retry.attempt(6, reach, 8).then(result => console.log(result));
*/

class get {
  constructor  (aim) {
   this.aim  = aim;
   this.init = 0;
   console.log(this.aim, this.init);
  }
 
  async reach() {
    if(this.init  === this.aim ) { return 'aim reached' ;} 
    console.log(`a = ${this.init }`);
    this.init  ++;
    await new Promise((resolve, reject) => setTimeout(() => reject('not reach'), 1000));
  }
 
} 

let Get = new get(5);

let Retry = new retry(Get);

Retry.attempt(6, 'reach').then(result => console.log(result));
