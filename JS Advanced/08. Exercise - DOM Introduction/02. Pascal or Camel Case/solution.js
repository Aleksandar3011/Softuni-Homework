function solve() {
    const result = document.getElementById(`result`);
    let text = document.getElementById(`text`).value.toLowerCase();
    let convertor = document.getElementById(`naming-convention`).value;

    if (convertor == `Camel Case`) {
        text = text.split(` `);
        for (let i = 1; i < text.length; i++) {
            text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
        }
        text = text.join(``);
    } else if (convertor == `Pascal Case`) {
        text = text.split(` `);
        for (let i = 0; i < text.length; i++) {
            text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
        }
        text = text.join(``);
    } else {
        text = `Error!`;
    }
    result.textContent = text;
}
