function solve(numOne, numTwo, numThree){
    let arr = [numOne, numTwo, numThree].sort((a,b)=>b-a);
    
    console.log(arr.join("\n"));
}
solve(2, 1, 3)
solve(-2,1,3)