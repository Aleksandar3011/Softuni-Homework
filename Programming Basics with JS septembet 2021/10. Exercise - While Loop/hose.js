function hose(input) {

    let totalSpace = Number(input[0]) * Number(input[1]) * Number(input[2]);
    let index = 3;
    let takeSpace = input[index];
    
    while(takeSpace !== "Done"){
        if(totalSpace < 0){
            console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`);
            break;    
        }
        takeSpace = Number(input[index]);
        index++;
        totalSpace -= takeSpace;
        takeSpace = input[index];
        
    }

    if(takeSpace === "Done"){
        if(totalSpace > 0){
            console.log(`${totalSpace} Cubic meters left.`);
           
        }else if(totalSpace < 0){
            console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`);
            
        }
    }
    

}
hose(["10", 
"1",
"2",
"4", 
"6",
"Done"])

