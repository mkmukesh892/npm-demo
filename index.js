var _ = require('underscore');
var res = _.contains([1,2,3],3);
var even = _.find([1,2,3,4,5,6], (num)=>{return num%2 == 0;});
var even1 =_.filter([1,2,3,4,5,6], (num)=>{return num%2 == 0;});
console.log(res);
console.log(even);
console.log(even1);