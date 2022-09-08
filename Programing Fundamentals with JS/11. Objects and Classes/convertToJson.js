function convertToJson(name, lastName, hairColor){

    let obj = {
        name,
        lastName,
        hairColor
    }

    let objToJson = JSON.stringify(obj);
    console.log(objToJson);
}

convertToJson('George', 'Jones', 'Brown');