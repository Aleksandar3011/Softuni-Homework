function storeProvision(arr1, arr2) {
  let myObj = {};

  for (let i = 0; i < arr1.length; i += 2) {
    let currProduct = arr1[i];
    myObj[currProduct] = Number(arr1[i + 1]);
  }
  for (let j = 0; j < arr2.length; j += 2) {
    let currProduct = arr2[j];
    if (!myObj.hasOwnProperty(currProduct)) {
      myObj[currProduct] = 0;
    }
    myObj[currProduct] += Number(arr2[j + 1]);
  }

  for(let product in myObj){
      console.log(`${product} -> ${myObj[product]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
