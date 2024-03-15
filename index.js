console.log("Hello World!");

let B = false
    I = false
    N = false
    G = false
    O = false

function newNumber (maxNumber){
    let x = Math.floor(Math.random() * maxNumber)+1; 
    if (x) {} 
    // if.. else if... else statement
    //conditional operator
    // GTE > = LTE < =, EQ =, NEQ! =, AND &&, or ||
    if (x <= 15){ console.log (`New number ${x} belongs to "B"`); B = true;
} else if (x >= 16 && x <= 30)
{
    console.log(`New Number ${x} belong to "I"`);
     I = true;
} else if (x >= 30 && x <= 45)
{
    console.log(`New Number ${x} belong to "N"`);
     N = true;
}
else if (x >= 45 && x <= 60)
{
    console.log(`New Number ${x} belong to "G"`);
     G = true;
}
else if (x >= 60 && x <= 75)
{
    console.log(`New Number ${x} belong to "O"`);
     O = true;
}

else {console. log(`New Number ${x} is invalid.`);

}
if (B == true && I == true && N == true && G == true && O == true){
    console.log (`BINGGOOO!!`);
  }
}

console.log(newNumber());




