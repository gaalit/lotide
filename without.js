const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual');


function without(source, itemsToRemove) {
 var newArr = [];
 for(var i = 0; i < source.length; i++){
   if(source[i] !== itemsToRemove[i]){
    newArr.push(source[i]);
   }
 }
 return newArr;
}
module.exports = without;