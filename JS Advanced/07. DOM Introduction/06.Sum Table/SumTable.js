function sumTable() {
    const cost = Array.from(document.querySelectorAll(`tr`));
    const result = document.getElementById(`sum`);
    let sum = 0;
    for(let i = 1; i < cost.length - 1; i++){
        sum += Number(cost[i].lastElementChild.textContent);
    }
    result.textContent = sum
}