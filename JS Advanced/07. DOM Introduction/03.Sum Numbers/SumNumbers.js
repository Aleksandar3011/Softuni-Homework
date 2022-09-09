function calc() {
    const sum = document.getElementById(`sum`);
    const num1 = document.getElementById(`num1`)
    const num2 = document.getElementById(`num2`)
    
    sum.value = Number(num1.value) + Number(num2.value);
}
