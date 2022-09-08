function employees(arr){
    let obj = {

    };


    for(let name of arr){
        obj.name = name;
        obj.nameLength = name.length;
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.nameLength}`);
    }

    
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);