function yardGreening(input) {
    let yard = Number(input[0]) * 7.61;
    let discount = yard * 0.18;
    let finalPrice = yard - discount;

        console.log(`The final price is: ${finalPrice} lv.`);
        console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);
yardGreening(["150"]);