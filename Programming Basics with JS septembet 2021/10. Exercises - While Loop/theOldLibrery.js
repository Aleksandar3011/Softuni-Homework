function theOldLibrery(input) {
    let index = 0;
    let book = input[index];
    index++;
    let checkedBooks = 0;

    let currentBook = input[index];
    index++
    while(currentBook !== book){
        
        if(currentBook === "No More Books"){
            break;
        }
        checkedBooks++;
        currentBook = input[index];
        index++;
    }
    
    if(currentBook === book){
        console.log(`You checked ${checkedBooks} books and found it.`);
        
    }else{
    console.log(`The book you search is not here!`);
    console.log(`You checked ${checkedBooks} books.`);
    }

}
theOldLibrery(["Troy",
"Stronger",
"Life Style",
"Troy"])







