function solve() {
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll(`button`));
  generateBtn.addEventListener(`click`, generate);
  buyBtn.addEventListener(`click`, buy);


  function generate(e){
    let input = JSON.parse(document.querySelector(`textarea`).value);
    input.forEach(x => {
      let tr = document.createElement(`tr`);
      let td1 = document.createElement(`td`);
      let td2 = document.createElement(`td`);
      let td3 = document.createElement(`td`);
      let td4 = document.createElement(`td`);
      let td5 = document.createElement(`td`);
      let image = document.createElement(`img`);
      image.src = x.img;
      td1.appendChild(image);
      tr.appendChild(td1);
      let p1 = document.createElement(`p`);
      p1.textContent = x.name;
      let p2 = document.createElement(`p`);
      p2.textContent = Number(x.price);
      let p3 = document.createElement(`p`);
      p3.textContent = Number(x.decFactor);
      td2.appendChild(p1);
      td3.appendChild(p2);
      td4.appendChild(p3);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      let el = document.createElement(`input`);
      el.type = "checkbox"
      td5.appendChild(el);
      tr.appendChild(td5);
      document.querySelector(`tbody`).appendChild(tr);
    });
  
  }

  function buy(e){
    let checkboxes = Array.from(document.querySelectorAll(`tbody input`)).filter(c => c.checked);
    let bought = [];
    let price = 0;
    let decoration = 0;

    checkboxes.forEach(x => {
      let parrent = x.parentElement.parentElement;
      let data = Array.from(parrent.querySelectorAll(`p`));
      bought.push(data[0].textContent);
      price += Number(data[1].textContent);
      decoration += Number(data[2].textContent);

    })
    let output = document.querySelectorAll(`textarea`)[1];
    output.textContent += `Bought furniture: ${bought.join(`, `)}\r\n`;
    output.textContent += `Total price ${price.toFixed(2)}\r\n`;
    output.textContent += `Average decoration factor ${decoration / checkboxes.length}`;

  }

}
