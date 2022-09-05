function fruitOrVegetable(input) {

    let kind = input[0];

    if(kind === "banana" || kind === "apple" || kind === "kiwi" || kind === "cherry" || kind === "lemon" || kind === "grapes"){
        console.log("fruit");
    }else if(kind === "tomato" || kind === "cucumber" || kind === "pepper" || kind === "carrot"){
        console.log("vegetable");
    }else{
        console.log("unknown");
    }



}