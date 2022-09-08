// function distinctArray(arr) {
  
//  for (let i = 0; i < arr.length; i++) {
//     let num = arr[i]
//   while(arr.includes(num)) {
//     arr.splice(arr.indexOf(num), 1);
//   }
//   arr.splice(i, 0, num)
// }

//   console.log(arr.join(' '));
// }

// distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);


function solve(arr){
    let newArr = [];

    for(let num of arr){
        if(!(newArr.includes(num))){
            newArr.push(num);
        }
    }
    console.log(newArr);
}

solve([20, 8, 12, 13, 4, 4, 8, 5]);


