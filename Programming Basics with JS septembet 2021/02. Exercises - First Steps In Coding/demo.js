function calc(input) {
    let deposit = Number(input[0]);
    let srok = Number(input[1]);
    let lihva = Number(input[2]);
    let natrupanaLihva = (deposit * lihva) / 100;
    let lihvaMesec = natrupanaLihva / 12;
    let ObshtaSuma = deposit + srok * lihvaMesec
    console.log(ObshtaSuma);
}
calc(["200","3","5.7"])