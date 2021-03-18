function isEqual(firstArray, seccondArray){

    if(firstArray.length != seccondArray.length) return false;

    for(let i = 0; i < firstArray.length; i++){
        if(firstArray[i] != seccondArray[i]) return false;
    }
    
    return true;
}
console.log("isEqual([1,2,3,4],[1,2,3,4])", isEqual([1,2,3,4],[1,2,3,4]))