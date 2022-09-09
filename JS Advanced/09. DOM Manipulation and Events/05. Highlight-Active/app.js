function focused() {
    Array.from(document.querySelectorAll(`input`)).forEach(i => {
        i.addEventListener(`focus`, focus);
        i.addEventListener(`blur`, blur);
    });

    function focus(ev){
        ev.target.parentElement.className = `focused`;
    }
    function blur(ev){
        ev.target.parentElement.className = ``;
    }
}