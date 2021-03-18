function makeArrays(array, qtd){

    if(array.length < qtd) return array;	

    numPieces = Math.ceil(array.length / qtd);
    let newArray = [];

    for(let i = 0; i < numPieces; i++)	{
        let piece = array.splice(0, qtd);
        newArray.push(piece);
    }

    return newArray;
}
console.log("makeArrays([1,2,3,4,5],2)", makeArrays([1,2,3,4,5,6], 2) );