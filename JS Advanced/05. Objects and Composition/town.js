function town(arr){
    const registry = {

    };

    for(const el of arr){
        const [town, population] = el.split(` <-> `);
        const popAsNumber = Number(population);
        if(registry.hasOwnProperty(town)){
            registry[town] += popAsNumber;
        }else{
            registry[town] = popAsNumber;
        }
    }
    
    for(const city in registry){
        console.log(`${city} : ${registry[city]}`);
    }
}

town(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);