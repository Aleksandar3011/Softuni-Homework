// --> First Option <--
// function smallestNum(numOne, numTwo, numThree){
//     let smallest = 0;

//     if(numOne <= numTwo && numOne <= numThree){
//         smallest = numOne;
//     }else if(numTwo <= numOne && numTwo <= numThree){
//         smallest = numTwo;
//     }else if(numThree <= numTwo && numThree <= numTwo){
//         smallest = numThree;
//     }
//     console.log(smallest);
// }

// smallestNum(600,
//     342,
//     123);

// --> Second Option <--
// function smallestNum(numOne, numTwo, numThree) {
//   let smallest = function (numOne, numTwo, numThree) {
//     let num = 0;
//     if (numOne <= numTwo && numOne <= numThree) {
//       num = numOne;
//     } else if (numTwo <= numOne && numTwo <= numThree) {
//       num = numTwo;
//     } else if (numThree <= numTwo && numThree <= numTwo) {
//       num = numThree;
//     }
//     return num;
//   };
//   console.log(smallest(numOne, numTwo, numThree));
// }

// smallestNum(2, 3, 5);

// function smallestNum(num1, num2, num3){
//     let smallest = (num1, num2 ,num3) => Math.min(num1, num2 ,num3);
//         console.log(smallest);
// }

// smallestNum(2, 3 ,5);

function small(num1, num2 ,num3){
    let smallest = Math.min(num1, num2, num3)
    return smallest;
    
}

console.log(small(1, 2, 3));