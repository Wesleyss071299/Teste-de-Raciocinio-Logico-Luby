function joinArray(elements){
			
    let newArray = [];

    for(let i = 0; i < elements.length; i++){

        if(Array.isArray(elements[i])){
            for(let j = 0; j < elements[i].length; j++){
                newArray.push(elements[i][j])
            }
        } else {
            newArray.push(elements[i])
        }
    }

    return newArray;
}

console.log("joinArray([1,2,[3], [4,5]])", joinArray([1,2,[3], [4,5]]));