var factors = function(number) {
var a=[1];
i=2;
j=number/2;
while (i<j) {
    if (number%i === 0) {a.push(i);}
    i++;
    j=number/i;
}
b=a.length;
for (k=b-1; k>-1; k--) {
    a.push(number/a[k]);
}

return a;
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

var largestPrime = function (number) {
    var arr = factors(number);
    var a=[];
    l=0;
    while (l<arr.length) {
        if (isPrime(arr[l])) {
            a.push(arr[l]);
        }
        l++;
    }
    return a[a.length-1];
};
