function arrRotation(arr, rotation){
    
    for(let i = 1; i <= rotation; i++){
        let element = arr.shift();
        arr.push(element)
    }
    console.log(arr.join(` `));
}
arrRotation([51, 47, 32, 61, 21], 2);
console.log(`----------`);
arrRotation([32, 21, 61, 1], 4);
console.log(`----------`);
arrRotation([2, 4, 15, 31], 5);