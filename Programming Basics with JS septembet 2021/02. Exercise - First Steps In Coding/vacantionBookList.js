function vacantionBookList(input) {
    let pageNumbers = Number(input[0]);
    let pages = Number(input[1]);
    let days = Number(input[2]);
    let totalHours = pageNumbers / pages;
    let needHours = totalHours / days;

    console.log(needHours);
}

vacantionBookList(["212 ","20 ","2 "]);
