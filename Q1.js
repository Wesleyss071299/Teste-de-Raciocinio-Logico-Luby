function createArray(numberItens, content){
    let array = [];

    for (let i = 0; i < numberItens; i++) {
        array[i] = content;
    }

    return array;
}

console.log('createArray(3,a)', createArray(3, 'a'))