function personalTitles(input) {

    let years = Number(input[0]);
    let gender = input[1];

    if(years >= 16 && gender === "m"){
        console.log(`Mr.`);
    }else if(years < 16 && gender === "m"){
        console.log(`Master`);
    }else if(years >= 16 && gender === "f"){
        console.log(`Ms.`);
    }else if(years < 16 && gender === "f"){
        console.log(`Miss`);
    }

}