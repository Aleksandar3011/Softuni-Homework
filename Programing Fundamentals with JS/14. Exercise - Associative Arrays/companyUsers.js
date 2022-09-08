function solve(input) {
    let companies = {};
    for (let elem of input) {
        let [company, id] = elem.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        companies[company].push(id);
    }
    let sorted = Object.entries(companies);
    sorted.sort();
    for (let elem of sorted) {
        console.log(elem[0]);
        let set = new Set(elem[1]);
        for (let number of set) {
            console.log(`-- ${number}`);
        }
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);