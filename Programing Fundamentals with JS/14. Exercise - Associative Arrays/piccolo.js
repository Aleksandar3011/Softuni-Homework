function piccolo(input){
    let parking = new Set();

    for(let line of input){
        let [command, number] = line.split(`, `);

        if(command == `IN`){
            parking.add(number)
        }else{
            parking.delete(number)
        }
    }
    if(parking.size == 0){
        console.log("Parking Lot is Empty");
    }else{
        let result = Array.from(parking);
        result.sort();
        for(let num of result){
            console.log(num);
        }
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);