var factors = function(number) {
var a=[];
i=2;
j=number/2;
while (i<j) {
if (number%i === 0) {a.push(i);}
i++;
j=number/i;
}
console.log(a);
};

var isPrime = function (number) {
if (number === 2) {return true;}
i=3;
if (number%2 ===0) {return false;} else {
while (i<number/2) {
if (number%i ===0) {return false;} else {
i+=2;
}
}
return true;
}
};