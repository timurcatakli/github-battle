var votes = [
  'tacos',
  'pizza',
  'pizza',
  'tacos',
  'fries',
  'ice cream',
  'ice cream',
  'pizza'
]

var reducer = function(tally, item){
  if(tally[item]){
    tally[item] += 1
  } else {
    tally[item] = 1
  }
  return tally;
}

var initialValue = {};
var result = votes.reduce(reducer, initialValue);
console.log(result);