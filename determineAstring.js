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