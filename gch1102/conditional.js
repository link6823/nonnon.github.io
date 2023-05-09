grade = 3.7
if (grade >= 5.0)
console.log ("Pass")
else
console.log ("Refer")

//0     -4.5: refer
//5.0   -6.5: Pass
//7.0   -8.5: Merit
//9.0   -10: Distionction

mark = 8.6
if (mark >=9.0 && mark <= 10.0)
    console.log ("Distinction")
else if (mark >= 7.0 && mark <= 8.5)
    console.log ("Merit")
else if (mark >= 5.0 && mark <= 6.5)
    console.log ("Pass")
else 
    console.log ("Refer")

speed = 2
switch (speed) {
    case 0:
    console.log("Fan is stopped")
    break
    case 1:
    console.log("Fan speed is 1")
    break
    case 2:
    console.log("Fan speed is 2")
    break
    default: 
    console.log("Invalid speed")
    break
}