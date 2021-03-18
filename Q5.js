function removeItems( array, ...elements){
    let newArray = array;
    
    let elementsRemove = elements;
    
    for (let i = 0 ; i < elementsRemove.length; i++) {

        while(newArray.indexOf(elementsRemove[i]) != -1){
            newArray.splice(newArray.indexOf(elementsRemove[i]),1);
        }
    }

    return newArray;
}
console.log("removeItems([5,4,3,2,5], 5,3)", removeItems([5,4,3,2,5], 5,3))