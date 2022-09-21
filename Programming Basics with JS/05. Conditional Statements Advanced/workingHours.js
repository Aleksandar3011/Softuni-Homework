function workingHours(input) {

    let hours = Number(input[0]);
    let day = input[1];

    if(hours >= 10 && hours <= 18 && day === "Monday"){
        console.log("open");
    }else if(hours >= 10 && hours <= 18 && day === "Tuesday"){
        console.log("open");
    }else if(hours >= 10 && hours <= 18 && day === "Wednesday"){
        console.log("open");
    }else if(hours >= 10 && hours <= 18 && day === "Thursday"){
        console.log("open");
    }else if(hours >= 10 && hours <= 18 && day === "Friday"){
        console.log("open");
    }else if(hours >= 10 && hours <= 18 && day === "Saturday"){
        console.log("open");
    }else{
        console.log("closed");
    }
}

workingHours(["11",
"Sunday"]);