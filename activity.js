//Data types
//String
let name = "Raymart";

//Integer
let int = 20;

//boolean
let inCorrecct = true;

//undefined
let middlename;

//null
let firstname = null;

//B. Arithmetic and logical eperators
//Arithmetic
let x = 10;
let y = 20;

let sum = x + y;
let diff = x - y;
let prod = x * y;
let qou = x / y;

console.log("the sum is " + sum);
console.log("the difference is " + diff);
console.log("the product is " + prod);
console.log("the qoutient is " + qou );

//Logical Operators
 let num1 = 5;
 let num2 = 10;

 let result1 = num1 += 20;
 let result2 = num1 += 20;
 let result3 = num1 += 20;
 let result4 = num1 += 20;

 console.log(result1);
 console.log(result2);
 console.log(result3);
 console.log(result4);

 //condition statement


 //if statement 
 let tomorrow = new Date().getDate();
 let greetings, greet, variable;

 if(tomorrow < 24){
    greetings = "Good evening";
 }

console.log(greetings);
 

//if else statement
if (tomorrow > 18){
    greet = "good evening";
}
else{
    greet = "you to have a god day";
}
console.log(greet);

//else if statement
if (tomorrow > 18){
    variable = "What's up";
}else if(tomorrow < 18){
    variable = "welcome to my GitHub account";
}else{
    variable = "have a nice day";
}
console.log(variable);

//switch statement
let week = 2;
let greeting;

switch(week){
    case 1:
        greeting = "Hi guys have a nice day!";
        break;
    case 2:
        greeting = "Hope you happy all day!";
    case 3:
        greeting = "God is Good All The Time";
        break;
}
console.log(greeting);

//loops
//for loop

for (let n=0; n < 20; n++){
    console.log(n);
}

//while loop
let n= 0;
while (n < 20){
    n++;
}
    console.log("numbers are:" + n);

    //do while loop

    let k = 0 ;
    do {
        console.log("number are:"+ k);
        k++;
    }while(k < 10);

//E. Functional programming
//I. determine a number if it is odd or even

function oddOrEven(num){
    return num % 3 === 0? "Even" : "Odd";
}
console.log(oddOrEven(21));
console.log(oddOrEven(12));

//II, determine a number if it is prime number

function prime(number){
    let variable = true;
    if(number <= 1){
       variable = false;
    }
    for(let n = 2; n * n <= number; n++){
        check = false;
        break;
    }
    if(variable){
        console.log(number + "is a prime number");
    }else{
        console.log(number + "is not a prime number");
    }
}
prime(10);
prime(5);

//III detemine a string if it is a palindrome

function palin(pal){
    let j= pal.length - 1;
    for ( let n = 0; n < pal.lengh / 2; n++){
        if (pal [n]!=pal[j]){
return false;
        }
        j++;
    }
    return true;
}
        let pal1 = "Raymart";
        let pal2 = 2;
        let pal3 = "Ken Jay";

        console.log(palin(pal1));
        console.log(palin(pal2));
        console.log(palin(pal3));