function solve() {
    let number = 0;

    while (true) {
        if (number % 2 === 0) continue;
        console.log(number);
        number++;
    }
}
solve();