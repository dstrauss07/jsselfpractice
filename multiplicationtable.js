var num1=0,
num2 = 0,
max1 = 12,
max2 = 12;

for(num1;num1<=max1;num1++){
    num2=0;
    console.log("The " +num1 + "'s Table" );
    for(num2;num2<=max2;num2++){
        console.log(num1 + " X " + num2 + " = " + (num1 * num2));
    }
    if(num1<12){
        console.log("____________");
    }
   }