// function solve() {
//    document.querySelector('#btnSend').addEventListener('click', onClick);

//    function onClick () {
//       let bestRestPara = document.querySelector('#bestRestaurant p');
//       let bestWorkPara = document.querySelector('#workers p');

//       let restaurants = JSON.parse(document.querySelector(`div textarea`).value);
//       let bestRest = ``;
//       let bestSalary = 0;
//       let bestWorkSalary = 0;
//       let bestRabotnik = [];
//       for(let restaurant of restaurants){
//          let [rest, workers] = restaurant.split(` - `);
//          let splitedWorkers = workers.split(`, `);
//          let avgSalary = 0
//          for(let worker of splitedWorkers){
//             let[name, salary] = worker.split(` `);
//             avgSalary += Number(salary);
//          }
//          avgSalary /= splitedWorkers.length;
//          if(avgSalary > bestSalary){
//             let newArr = [];
//             let workersArr = [];
//             for(let worker of splitedWorkers){
//                let[name, salary] = worker.split(` `);
//                newArr.push(salary);
//                workersArr.push(worker);
//             }
//             bestSalary = avgSalary;
//             bestRest = rest;
//             bestWorkSalary = Math.max(...newArr);
//             bestRabotnik = [...workersArr];
//          }
//       }
//       // math.max splited workers
//       // console.log(bestRest, bestSalary.toFixed(2), bestWorkSalary);
//       let x = {};
//       for (let y of bestRabotnik) {
//          let [name, salary] = y.split(' ');
//          x[name] = salary;
//       }
//       let sorted = Object.entries(x);
//       sorted = sorted.sort((a, b) => b[1] - a[1]).join(' ');
//       let dvoiki = sorted.split(' ');
//       dvoiki = dvoiki.map(x => x.split(',').join(' '))
//       // console.log(dvoiki);
//       let content = ``;
//       for (let one of dvoiki) {
//          let [name, salary] = one.split(' ');
//          content += `Name: ${name} With Salary: ${salary} `
//       }


//       bestRestPara.innerHTML = `Name: ${bestRest} Average Salary: ${bestSalary.toFixed(2)} Best Salary: ${bestWorkSalary.toFixed(2)}`;
//       bestWorkPara.innerHTML = `${content}`;
//       // console.log(bestRabotnik);
//    }
// }

function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let arr = JSON.parse(document.querySelector('#inputs textarea').value);
      let objWinner = findBestRestaurant(arr);
      document.querySelector('#bestRestaurant>p').textContent = getMsgRest(objWinner);
      document.querySelector('#workers>p').textContent = getMsgEmp(objWinner.workers);
   }

   function getMsgRest(objWinner) {
      return `Name: ${objWinner.name} Average Salary: ${objWinner.avgSalary.toFixed(2)} Best Salary: ${objWinner.maxSalary.toFixed(2)}`;
   }

   function getMsgEmp(workers) {
      return workers.map(w => `Name: ${w.worker} With Salary: ${w.salary}`).join(' ');
   }

   function findBestRestaurant(arr) {
      let resultRestaurants = arr.reduce((acc, e) => {
         let [restaurant, ...workers] = e.split(/(?: - )|(?:, )/g);
         workers = workers.map(w => {
            let [worker, salary] = w.split(' ');
            return {
               worker: worker,
               salary: +salary
            };
         });
         let foundRestraunt = acc.find(r => r.name === restaurant);
         if (foundRestraunt) {
            foundRestraunt.workers = foundRestraunt.workers.concat(workers);
         } else {
            acc.push({
               name: restaurant,
               workers: workers
            });
         }
         return acc;
      }, []);

      resultRestaurants.forEach((el, idx) => {
         el.inputOrder = idx;
         el.avgSalary = el.workers.reduce((acc, el) => acc + el.salary, 0) / el.workers.length;
         el.maxSalary = Math.max(...el.workers.map(w => w.salary));
      });

      resultRestaurants.sort((a, b) => b.avgSalary - a.avgSalary || a.inputOrder - b.inputOrder);
      let bestRestaurant = resultRestaurants[0];
      bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

      return bestRestaurant;
   }
}