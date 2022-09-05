function password(input) {
    let index = 0;
    let username = input[index];
    index++;
    let realpass = input[index];
    index++;
    let attempt = input[index];
    index++;
    
    while(attempt === realpass){
        attempt = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`)

}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
