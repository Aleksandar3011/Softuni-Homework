function reverse(num, arr){
    let res = []
    for(let i = 0; i < num; i++){
        res.push(arr[i])
    }
    res.reverse();
    console.log(res.join(` `));
}
reverse(3, [10, 20, 30, 40, 50]);
console.log(`-------------`);
reverse(4, [-1, 20, 99, 5]);
console.log(`-------------`);
reverse(2, [66, 43, 75, 89, 47]);
