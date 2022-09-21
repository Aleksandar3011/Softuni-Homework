function faceOnFigure(input){



    let figure = input[0];
    let firstNumber = Number(input[1]);
    let secondNumber = Number(input[2]);

    if(figure === "square"){
        console.log((firstNumber * firstNumber).toFixed(3));
    }else if(figure === "rectangle"){
        console.log((firstNumber * secondNumber).toFixed(3));
    }else if(figure === "circle"){
        console.log((Math.PI * firstNumber * firstNumber).toFixed(3));
    }else if(figure === "triangle"){
        console.log((firstNumber * secondNumber / 2).toFixed(3));
    }

}
faceOnFigure(["triangle",
"4.5",
"20"])



