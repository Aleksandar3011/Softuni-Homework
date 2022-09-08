function merge2(arr1, arr2){
    let length = arr1.length;
    let newArr = [];
    for(let i = 0; i < arr1.length; i++){
        if(i % 2 == 0){
            newArr.push(Number(arr1[i]) + Number(arr2[i]));
        }else{
            newArr.push(arr1[i] + arr2[i])
        }
    }
    console.log(newArr.join(` - `));
}
merge2(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);