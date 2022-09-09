function subtract() {
    const result = document.getElementById(`result`);
    let firstNumber = Number(document.getElementById(`firstNumber`).value);
    let secondNumber = Number(document.getElementById(`secondNumber`).value);
    console.log(result.textContent = firstNumber - secondNumber);
}