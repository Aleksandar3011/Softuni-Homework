function inventory(input){
    let heros = [];

    for (const lines of input) {
        let [name, level, items] = lines.split(` / `);
        heros.push({
            name,
            level,
            items})
    }

    heros.sort((a,b) => a.level - b.level);
    for (const hero of heros) {
        for (const currHero of Object.keys(hero)) {
            if(currHero == `name`){
                console.log(`Hero: ${hero[currHero]}`);
            }else if(currHero == `level`){
                console.log(`level => ${hero[currHero]}`);
            }else if(currHero == `items`){
                console.log(`items => ${hero[currHero]}`);
            }
        }
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);