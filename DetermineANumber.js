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
        console.log(number + " " + "is a prime number");
    }else{
        console.log(number+ " " +  "  " + "is not a prime number");
    }
}
prime(10);
prime(5);
