async function getInfo() {
    
    const stopId = document.getElementById(`stopId`).value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    
    try {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data);
    } catch (error) {
        console.log(`Error`);
    }
}