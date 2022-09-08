function train(input){

    let currWagon = input.shift().split(` `).map(Number);
    let maxCapacity = Number(input.shift());
    
    for(let elements of input){
        let currElements = elements.split(` `);
        if(currElements[0] === `Add`){
            currWagon.push(Number(currElements[1]));
        }else{
            for(let i = 0; i < currWagon.length; i++){
                if(currWagon[i] + Number(currElements[0]) <= maxCapacity){
                    currWagon[i] += Number(currElements[0]);
                    break;
                }

            }
        }
        
    }

    console.log(currWagon.join(` `));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']   );