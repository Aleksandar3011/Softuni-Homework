function solve(arr) {

    while (arr.length > 1) {

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] + arr[i + 1];
        }

        arr.pop();
    }
    console.log(arr.join());
}
solve([2, 10, 3]);