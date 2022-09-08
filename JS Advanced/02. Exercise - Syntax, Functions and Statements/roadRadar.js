function solve(km, area){
    if(area == `motorway`){
    if(km <= 130){
        console.log(`Driving ${km} km/h in a ${130} zone`);
    }else{
        if(km - 130 <= 20){
            console.log(`The speed is ${km - 130} km/h faster than the allowed speed of ${130} - speeding`);
        }else if(km - 130 > 20 && km - 130 <= 40){
            console.log(`The speed is ${km - 130} km/h faster than the allowed speed of ${130} - excessive speeding`);
        }else{
            console.log(`The speed is ${km - 130} km/h faster than the allowed speed of ${130} - reckless driving`);
        }
    }
}
    if(area == `interstate`){
    if(km <= 90){
        console.log(`Driving ${km} km/h in a ${90} zone`);
    }else{
        if(km - 90 <= 20){
            console.log(`The speed is ${km - 90} km/h faster than the allowed speed of ${90} - speeding`);
        }else if(km - 90 > 20 && km - 90 <= 40){
            console.log(`The speed is ${km - 90} km/h faster than the allowed speed of ${90} - excessive speeding`);
        }else{
            console.log(`The speed is ${km - 90} km/h faster than the allowed speed of ${90} - reckless driving`);
        }
    }
}
    if(area == `city`){
    if(km <= 50){
        console.log(`Driving ${km} km/h in a ${50} zone`);
    }else{
        if(km - 50 <= 20){
            console.log(`The speed is ${km - 50} km/h faster than the allowed speed of ${50} - speeding`);
        }else if(km - 50 > 20 && km - 50 <= 40){
            console.log(`The speed is ${km - 50} km/h faster than the allowed speed of ${50} - excessive speeding`);
        }else{
            console.log(`The speed is ${km - 50} km/h faster than the allowed speed of ${50} - reckless driving`);
        }
    }
}
    if(area == `residential`){
    if(km <= 20){
        console.log(`Driving ${km} km/h in a ${20} zone`);
    }else{
        if(km - 20 <= 20){
            console.log(`The speed is ${km - 20} km/h faster than the allowed speed of ${20} - speeding`);
        }else if(km - 20 > 20 && km - 20 <= 40){
            console.log(`The speed is ${km - 20} km/h faster than the allowed speed of ${20} - excessive speeding`);
        }else{
            console.log(`The speed is ${km - 20} km/h faster than the allowed speed of ${20} - reckless driving`);
        }
    }
}

}

solve(200, 'motorway');