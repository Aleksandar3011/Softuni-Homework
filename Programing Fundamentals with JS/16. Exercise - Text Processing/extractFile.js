function extractFile(input){
    let splited = input.split(`.`);
    let extension = splited.pop();
    splited = splited.join(`.`).split(`\\`);
    let fileName = splited.pop();
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.back.cs');