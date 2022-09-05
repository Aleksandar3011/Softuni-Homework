function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    index++;

    let student = 0;
    let standard = 0;
    let kids = 0;
    let totalTickets = 0;


    while (command !== "Finish") {
        let filmName = command;
        let busyPlaces = 0;
        let freePlaces = Number(input[index])
        index++;
        let ticketType = input[index];
        index++;
        while (ticketType !== "End") {
            if(ticketType === "Finish"){
                index--;
                break;
            }
            totalTickets++;
            busyPlaces++;
            if(ticketType === "student"){
                student++;
            }else if(ticketType === "standard"){
                standard++;
            }else if(ticketType === "kid"){
                kids++;
            }
            if(busyPlaces === freePlaces){
                break;
            }
            ticketType = input[index];
            index++;

        }
        console.log(`${filmName} - ${((busyPlaces / freePlaces) * 100).toFixed(2)}% full.`);
        command = input[index];
        index++;
        
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((student / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standard / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kids / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])

