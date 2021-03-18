function invertArray(array){
    let newArray = []

    for (let i = 0; i < array.length ; i++) {
        let position = array.length - (i + 1);
        newArray[i] = array[position]
    }

    return newArray;
}

console.log('invertArray([1,2,3,4])', invertArray([1,2,3,4]))