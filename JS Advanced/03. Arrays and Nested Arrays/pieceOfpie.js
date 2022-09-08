function solve(arr, start, end){
    let startIndex = arr.indexOf(start);
    let endIndex = arr.indexOf(end) + 1;
    let newArr = arr.splice(startIndex, endIndex);
    return newArr;
}

console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));