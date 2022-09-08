function solve(num) {
  let rows = [];
  let columns = [];
  for (let i = 0; i < num; i++) {
    rows.push(`*`);
    for (let j = 0; j < num; j++) {
      columns.push(`*`);
      if (columns.length == num) {
        console.log(`${columns.join(` `)}`);
        columns = [];
      }
    }
  }
}

solve(7);
