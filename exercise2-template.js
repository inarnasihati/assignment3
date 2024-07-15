/**
Diberikan sebuah function yang menerima satu parameter berupa string. 
Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang berjarak minimal 3 karakter lain (termasuk spasi). 
Jika tidak ditemukan sama sekali, kembalikan nilai false.

Contoh: 
barbarian akan mengembalikan nilai true
you are boring akan mengembalikan nilai true
bacon sand meat akan mengembalikan nilai false

*/ 

/*function threeStepsAB(text) {
    // your code here

   /* const indexA = text.indexOf("a");
    const indexB = text.indexOf("b");   
    const selisih = 0;
    //console.log(text);
    //console.log(indexA);
    //console.log(indexB);

    /*if(indexA != -1 && indexB != -1){
        if (indexA < indexB){
           // console.log("kesini");
            let selisih = indexB - indexA;
           // console.log(selisih);
            if(selisih >= 3){
                return true;
            } else {
                return false;
            }
        }else{
            let selisih = indexA - indexB;
           //console.log(selisih);
            if(selisih >= 3){
                return true;
            } else {
                return false;
            }
        }
    }else{
        return false;
    }    
 
}*/

function threeStepsAB(text) {
    console.log(text);
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a' && i + 4 < text.length && text[i + 4] === 'b') {
            console.log(text[i]);
            console.log(i+4);
            console.log(text[i]);
            return true;
        }
        if (text[i] === 'b' && i + 4 < text.length && text[i + 4] === 'a') {
            return true;
        }
    }
    return false;
}


// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false



