function firstLast(arr){
    let first = arr.shift();
    let second = arr.pop();
    let res = Number(first) + Number(second)
    console.log(res);
    // -> Second Way
    // console.log(Number(arr.shift()) + Number(arr.pop()));
}

firstLast(['20', '30', '40']);