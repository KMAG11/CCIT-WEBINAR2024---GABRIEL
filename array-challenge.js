
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
    Challenge: Display the numbers using the below format
    EVEN NUMBERS: 
    2
    4
    6
    8
    10
    ODD NUMBERS: 
    1
    3
    5
    7
    9
*/
console.log("Challenge: Display the numbers using the below format \nEVEN NUMBERS:")
let even = []
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0)
    even = (arr[i])
    console.log(even)
}
console.log("ODD NUMBERS:")
let odd = []
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 1)
    odd = (arr[i])
    console.log(odd)
}

//SUBMITTED BY KIARA GABRIEL - BSINFOTECH2C 