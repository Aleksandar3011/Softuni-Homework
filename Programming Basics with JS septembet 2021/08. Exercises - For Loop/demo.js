function climbing(input) {
    let index = 0;
    let numGroups = Number(input[index]);
    index++;
    let mountain = "";

    for(let i = 0; i <= numGroups; i++){
        let group = Number(input[index]);
        index++;
        if(group <= 5){
            console.log(6 / group * 100);;
        }else if(group >= 6 && group <= 12){
            mountain = "Monblan";
        }else if(group >= 13 && group <= 25){
            mountain = "Kalimandjaro";
        }else if(group >= 26 && group <= 40){
            mountain = "K2"
        }else{
            mountain = "Everest"
        }


        if(mountain === "Musala"){
            console.log(6 / group * 100);
        }
    }

    climbing(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);