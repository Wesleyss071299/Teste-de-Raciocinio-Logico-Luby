function removeDuplicate(array){
    let duplicatedArray = array.map(i => i);
    let newArray = [];
    
    while(duplicatedArray.length > 0){			

        let itemRemoved = duplicatedArray.shift();

        while(duplicatedArray.indexOf(itemRemoved) != -1){

            let position = duplicatedArray.indexOf(itemRemoved);
            duplicatedArray.splice(position, 1);
        }
    }
    return newArray;

}
console.log("removeDuplicate([1,2,3,3,2,4,5,4,7,3])", removeDuplicate([1,2,3,3,2,4,5,4,7,3]))