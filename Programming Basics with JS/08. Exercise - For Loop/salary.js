function salary(input) {
    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;
    


    for(let i = 0; i < openTabs; i++){
        let currentOpenTab = input[index];
        index++;
        if(currentOpenTab === "Facebook"){
            money-= 150;
        }else if(currentOpenTab === "Instagram"){
            money-= 100;
        }else if(currentOpenTab === "Reddit"){
            money-= 50;
        }
    }

    

    if(money <= 0){
        console.log(`You have lost your salary.`);
    }else{
        console.log(Math.ceil(money));
    }
    
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])
