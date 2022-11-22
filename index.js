// Code your solutions in this file

function writeCards(eArray,Revent){
    let nArr = [];

    for(let c = 0; c < eArray.length; c++){
        nArr[c] = `Thank you, ${eArray[c]}, for the wonderful ${Revent} gift!`;
    }
}

function countDown(rNum){
    while(rNum >= 0){
        console.log(rNum--);
    }
    return rNum;
}