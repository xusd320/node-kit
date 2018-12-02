'use strict';

module.exports = async function(ms) {
 let left = ms;
 let week = 7 * 24 * 60 * 60 * 1000;
 if( left > week) {
  await new Promise((resolve, reject) => setTimeout(resolve, week));
  left = ms - week;
 } 
 await new Promise((resolve, reject) => setTimeout(resolve, left));
}
