function solve(input){
    
    let parking = new Set();

    for(let line of input){
        let [command, carNumber] = line.split(`, `);
        
        if(command == `IN`){
            parking.add(carNumber);
        }else{
            parking.delete(carNumber);
        }
    }

    if(parking.size != 0){
    let result = Array.from(parking);
    let sorted = result.sort()
    for(let car of sorted){
        console.log(car);
    }
}else{
    console.log(`Parking Lot is Empty`);
}
    
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);