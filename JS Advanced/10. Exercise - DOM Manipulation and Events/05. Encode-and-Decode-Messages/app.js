function encodeAndDecodeMessages() {
    let textareas = document.querySelectorAll(`textarea`);
    let buttons = document.querySelectorAll(`button`);

    buttons[0].addEventListener(`click`, encode);
    buttons[1].addEventListener(`click`, decode);

    function encode(){
        let encodeMessage = ``;
        let input = textareas[0].value;
        for(let i = 0; i < input.length; i++){
            encodeMessage += String.fromCharCode(input[i].charCodeAt(0) + 1);
        }
        textareas[1].value = encodeMessage;
        textareas[0].value = ``;
    }

    function decode(){
        let decodeMessage = ``;
        let output = textareas[1].value;
        for(let i = 0; i < output.length; i++){
            decodeMessage += String.fromCharCode(output[i].charCodeAt(0) - 1);
        }
        textareas[1].value = decodeMessage;
    }
}