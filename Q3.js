function cleanArray(array){
    let newArray =  array.map(i => i);
    let invalidValues = [false, undefined, '', 0, null,];

    for (let i = 0 ; i < invalidValues.length; i++) {
        while(newArray.indexOf(invalidValues[i]) != -1){
            newArray.splice(newArray.indexOf(invalidValues[i]),1);
        }
    }
    return newArray;
}

console.log("cleanArray([1, 2, '', undefined])", cleanArray([1,2, '', undefined,]))