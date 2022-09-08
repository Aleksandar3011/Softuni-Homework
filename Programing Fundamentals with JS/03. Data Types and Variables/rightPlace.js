function rightPlace(firstString, char, secondString){
    // we need to create empty variables to collect letters
    let result = ``;
    // we have to go around firstString and find missing letter`_`
    for(let i = 0; i < firstString.length; i++){
        if(firstString[i] == `_`){
            result += char
        }else{
            result += firstString[i]
        }
        
    }
    if(result == secondString){
        console.log(`Matched`);
    }else{
        console.log(`Not Matched`);
    }
    // we need to check wether firstString and secondString are matched
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');
