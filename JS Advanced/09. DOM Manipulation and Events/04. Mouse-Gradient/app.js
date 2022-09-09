function attachGradientEvents() {
    let gradient = document.getElementById(`gradient`);
    gradient.addEventListener(`mousemove`, mouseMove);
    
    function mouseMove(ev){
        document.getElementById(`result`). textContent = Math.floor(ev.offsetX / gradient.clientWidth * 100) + `%`;
    }
}