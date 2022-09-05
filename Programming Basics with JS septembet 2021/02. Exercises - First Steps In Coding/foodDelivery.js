function foodDelivery(input) {
    let chickensMenu = Number(input[0]) * 10.35;
    let fishsMenu = Number(input[1]) * 12.40;
    let vegansMenu = Number(input[2]) * 8.15;
    let dessert = (chickensMenu + fishsMenu + vegansMenu) * 0.2;
    let totalSum = chickensMenu + fishsMenu + vegansMenu + dessert + 2.50;
    
        console.log(totalSum);
}

foodDelivery(["2 ",
"4 ",
"3 "]
);