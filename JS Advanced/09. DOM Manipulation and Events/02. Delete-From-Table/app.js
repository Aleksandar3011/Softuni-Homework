function deleteByEmail() {
    let input = document.querySelector(`[name="email"]`);
    const table = Array.from(document.querySelectorAll(`tbody tr`));
    const result = document.getElementById(`result`);
    
    for(let row of table){
        if(row.children[1].textContent.includes(input.value)){
            row.remove();
            result.textContent = `Deleted.`
        }else{
            result.textContent = `Not found.`
        }
    }
}