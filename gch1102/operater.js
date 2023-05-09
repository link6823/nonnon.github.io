a = 10
//postfix operater
b = a++ //b=a=10 => a++=a+1=11

//preflix operator
c = ++b //++a=a+1=12 => c=++a=12

console.log("a = " + a) //12
console.log("b = " + b) //10
console.log("c = " + c) //12

a = 3
b = 5
if (a<b)
console.log("a is smaller than b")
else if (a==b)
console.log("a is equal to b")
else
console.log("a is greater than b")