function modernTimes(input){
    let text = input.split(` `);
    let isFlag = true;

    for(word of text){
        isFlag = true;
        for(let char of word){
            let nan = isNaN(char);
        if(word.includes(`#`) && nan == false){
            isFlag = false;
            break;
        }else{
            continue;
        }
    }
    if(word.includes(`#`) && word.length > 1 && isFlag){
        console.log(word.substring(1));
    }
    }
    
}

modernTimes('#1variously #variously symbol # is known in English-speaking #regions as the #number sign');