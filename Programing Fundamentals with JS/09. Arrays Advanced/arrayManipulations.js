function arrayManipulations(arr){
    let myArr = arr.shift()
                .split(` `)
                .map(Number);
    
    for(let line of arr){
        let [command, x, y] = line.split(` `);
        x = Number(x);
        y = Number(y);

        switch(command){
            case `Add`: add(x); break;
            case `Remove`: remove(x); break;
            case `RemoveAt`: removeAt(x); break;
            case `Insert`: insert(x, y); break;
        }
    }

    
    console.log(myArr.join(` `));

    function add(num){
        myArr.push(num);
    }
    
    function remove(num) {
        while (myArr.includes(Number(num))) {
            let index = myArr.indexOf(Number(num));
            myArr.splice(index, 1);
        }

    }

        function removeAt(num) {
            myArr.splice(num, 1);
        }

        function insert(num, index){
            myArr.splice(index, 0, num)
        }
    
}

arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
);