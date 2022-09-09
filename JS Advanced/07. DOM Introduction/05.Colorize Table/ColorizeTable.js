function colorize() {
    const colored = Array.from(document.querySelectorAll(`tr`));

    for(let i = 1; i < colored.length; i+=2){
        colored[i].style.background = `teal`
    }
}