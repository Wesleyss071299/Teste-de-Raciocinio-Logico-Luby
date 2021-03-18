function findEqual(firstArray, secondArray){

    let bigger = firstArray.length >= secondArray.length ? firstArray : secondArray;
    let smaller = firstArray.length < secondArray.length ? firstArray : secondArray;
    let newArray = [];

    for(let i = 0; i < bigger.length;  i++){

            let itemFound = smaller.indexOf(bigger[i]);

            if(newArray.indexOf(smaller[itemFound]) == -1 && itemFound != -1) newArray.push(smaller[itemFound]);
    }

    return newArray;
}
console.log("findEqual([6,8], [8,9])", findEqual([6,8], [8,9]))