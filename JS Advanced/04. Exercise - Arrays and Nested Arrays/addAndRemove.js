function solve(commands){
    let result = [];
    let num = 0;
    for(let i = 0; i < commands.length; i++){
        num++;
        if(commands[i] == `add`){
            result.push(num);
        }else if(commands[i] == `remove`){
            result.pop();
            
        }
    }
    if(result.length == 0){
        console.log(`Empty`);
    }else{
        console.log(result.join(`\n`));
    }
}

solve(['add', 
'add', 
'remove', 
'add', 
'add']);