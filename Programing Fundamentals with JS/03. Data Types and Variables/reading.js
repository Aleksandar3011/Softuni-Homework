function reading(numOfPages, pagesInOneH, numOfDays){
    let totalTime = (numOfPages / pagesInOneH);
    let requiredHours = totalTime / numOfDays
    console.log(requiredHours);
}
reading(212,
    20 ,
    2 
    );
reading(432,
    15 ,
    4 
    );
