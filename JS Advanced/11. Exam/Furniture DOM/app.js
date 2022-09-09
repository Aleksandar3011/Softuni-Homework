window.addEventListener("load", solve);

function solve() {
    let add = document.querySelector(`#add`);
    add.addEventListener(`click`, addHandler);

    const ourTable = document.querySelector(`tbody#furniture-list`);

    const modelEl = document.getElementById(`model`);
    const yearlEl = document.querySelector(`input#year`);
    const desclEl = document.getElementById(`description`);
    const pricelEl = document.querySelector(`input#price`);

    function addHandler(e) {
        e.preventDefault();
        let modelValue = modelEl.value;
        let descValue = desclEl.value;
        let yearlElValue = Number(yearlEl.value);
        let pricelElValue = Number(pricelEl.value);

        if (
            modelEl.value.length > 0 &&
            yearlEl.value > 0 &&
            desclEl.value.length > 0 &&
            pricelEl.value > 0
        ) {
            const mainTr = document.createElement(`tr`);
            mainTr.classList.add(`info`);
            const tdModelName = document.createElement(`td`);
            tdModelName.textContent = modelValue;
            mainTr.appendChild(tdModelName);
            const tdPrice = document.createElement(`td`);
            tdPrice.textContent = pricelElValue.toFixed(2);
            mainTr.appendChild(tdPrice);

            const tdButtons = document.createElement(`td`);
            const BtnMoreInfo = document.createElement(`button`);
            BtnMoreInfo.classList.add(`moreBtn`);
            BtnMoreInfo.textContent = `More Info`;
            const BtnBuyIt = document.createElement(`button`);
            BtnBuyIt.classList.add(`buyBtn`);
            BtnBuyIt.textContent = `Buy it`;
            tdButtons.appendChild(BtnMoreInfo);
            tdButtons.appendChild(BtnBuyIt);
            mainTr.appendChild(tdButtons);

            const trDesc = document.createElement(`tr`);
            trDesc.classList.add(`hide`);
            const tdYear = document.createElement(`td`);
            tdYear.textContent = `Year: ${yearlElValue}`;
            trDesc.appendChild(tdYear);
            const tdDesc = document.createElement(`td`);
            tdDesc.setAttribute(`colspan`, 3);
            tdDesc.textContent = `Description: ${descValue}`;
            trDesc.appendChild(tdDesc);
            ourTable.appendChild(trDesc);
            // trDesc.style.display = `none`

            BtnMoreInfo.addEventListener(`click`, showMore);
            function showMore(e) {
                if (e.target.textContent == `More Info`) {
                    trDesc.style.display = `contents`;
                    e.target.textContent = `Less Info`;
                } else {
                    trDesc.style.display = `none`;
                    e.target.textContent = `More Info`;
                }
            }
            let totalPrice = 0;
            totalPrice += pricelElValue;
            
            BtnBuyIt.addEventListener(`click`, buy);
            function buy(e) {
                ourTable.remove();

                let result = document.querySelector(`td.total-price`);
                
                result.textContent = totalPrice.toFixed(2);
            }

            ourTable.appendChild(mainTr);
        }
    }
}
