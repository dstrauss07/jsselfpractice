var counter=1,
matchnum=11;

for(counter;counter<=100;counter++){
    if(counter % matchnum ==0) {
        console.log("MATCH " + counter +" is divisible by " + matchnum + "!")
    }  
    else{ console.log(counter);}
}