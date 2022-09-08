function companyUsers(input){
    let dataBase = {};
    
    let result = new Set();
    let currId;

    for(let line of input){
        let [company, id] = line.split(` -> `);

        currId = result.add(id);
        dataBase[company] = currId;

}
    console.log(dataBase);    
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);