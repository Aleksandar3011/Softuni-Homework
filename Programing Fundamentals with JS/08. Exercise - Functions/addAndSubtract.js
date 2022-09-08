function addAndSubstract(numOne, numTwo, numThree) {

    function add(numOne, numTwo){
        return numOne + numTwo;
    }

    let substract = (add, numThree) => add - numThree;

    let numForSubs = add(numOne, numTwo);
    let result = substract(numForSubs , numThree);
    console.log(result);
}

addAndSubstract(23, 6, 11);
