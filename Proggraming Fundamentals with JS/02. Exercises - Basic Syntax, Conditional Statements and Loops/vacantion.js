function vacation(people, typeGroup, day) {
    let price = 0;
    switch (day) {
        case `Friday`:
            if (typeGroup === `Students` && people >= 30) {
                price = people * 8.45;
                price -= (price * 0.15);
            } else if(typeGroup === `Students`){
                price = people * 8.45;
            }
            if (typeGroup === `Business` && people >= 100) {
                price = people * 10.90;
                price -= (10 * 10.90)
            } else if(typeGroup === `Business`){
                price = people * 10.90
            }
            if (typeGroup === `Regular` && people >= 10 && people <= 20) {
                price = people * 15;
                price -= (people * 0.05)
            } else if(typeGroup === `Regular`){
                price = people * 15
            }
            break;
        case `Saturday`:
            if (typeGroup === `Students` && people >= 30) {
                price = people * 9.80;
                price -= (price * 0.15);
            } else if(typeGroup === `Students`){
                price = people * 9.80;
            }
            if (typeGroup === `Business` && people >= 100) {
                price = people * 15.60;
                price -= (10 * 15.60)
            } else if(typeGroup === `Business`){
                price = people * 15.60
            }
            if (typeGroup === `Regular` && people >= 10 && people <= 20) {
                price = people * 20;
                price -= (people * 0.05)
            } else if(typeGroup === `Regular`){
                price = people * 20
            }
            break;
        case `Sunday`:
            if (typeGroup === `Students` && people >= 30) {
                price = people * 10.46;
                price -= (price * 0.15);
            } else if(typeGroup === `Students`){
                price = people * 10.46;
            }
            if (typeGroup === `Business` && people >= 100) {
                price = people * 16;
                price -= (10 * 16)
            }else if(typeGroup === `Business`){
                price = people * 16
            }
            if (typeGroup === `Regular` && people >= 10 && people <= 20) {
                price = people * 22.50;
                price -= (people * 0.05)
            } else if(typeGroup === `Regular`){
                price = people * 22.50
            }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30,
"Students",
"Sunday")
