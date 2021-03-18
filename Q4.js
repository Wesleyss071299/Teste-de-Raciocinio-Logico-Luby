function arrayToObject(arrays){
    let object = {};

    for (let i = 0; i < arrays.length ; i++) {
        let arrayItem = arrays[i]
        object[arrayItem[0]] = arrayItem[1]
    }

    return object;
}

console.log("arrayToObject([['c',2],['d',4]])", arrayToObject(([["c",2],["d",4]])));