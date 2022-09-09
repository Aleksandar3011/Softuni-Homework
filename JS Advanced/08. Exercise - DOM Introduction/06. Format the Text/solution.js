function solve() {
    let text = document.getElementById(`input`);
    let output = document.getElementById(`output`);
    let sentencesArr = text.value.split(`.`).filter(s => s != ``);
    
    while(sentencesArr.length > 0){
        let text = sentencesArr.splice(0, 3).join(`. `) + `.`;
        let p = document.createElement(`p`);
        p.textContent = text;
        output.appendChild(p);
    }
}
