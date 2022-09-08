function solve(fruit, grams, pricePerKillo){

    console.log(`I need $${(pricePerKillo * (grams / 1000)).toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);