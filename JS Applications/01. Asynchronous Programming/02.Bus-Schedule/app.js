function solve() {
    
    let nextStop = `depot`
    let stopName = ``;
    const depBtn = document.getElementById(`depart`);
    const arriveBtn = document.getElementById(`arrive`);


    async function depart() {
        depBtn.disabled = true;
        const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStop}`;
        const res = await fetch(url);
        const data = await res.json();
        nextStop = data.next;
        stopName = data.name
        document.querySelector(`#info span`).textContent = `Next stop ${stopName}`;
        arriveBtn.disabled = false;
    };

    function arrive() {
        document.querySelector(`#info span`).textContent = `Arriving at ${stopName}`;
        depBtn.disabled = false;
        arriveBtn.disabled = true;
    };

    return {
        depart,
        arrive
    };
}

let result = solve();