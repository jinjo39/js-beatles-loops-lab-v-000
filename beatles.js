'use strict';

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  };
  return array;
};

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  
  var i = 0;
  while (i < facts.length){
    facts[i] += "!!!";
    i++;
  }
  return facts;
};

function iLoveTheBeatles(number){
  var loopArray = [];

  do {
    loopArray.push("I love the Beatles!");
    number += 1;
  } while (number < 15);
  return loopArray;
};