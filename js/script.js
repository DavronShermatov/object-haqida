// objectlar xaqida 
const theif = {
    jacket:"black",
    height:1.7,
    colors:{
        hair:"gray",
        style:"curly",
    },
    howOut: function(){
        console.log("Fast with help doors");
    },
};

// delete theif.height   tanlangan elementni o'chirish uchun foydalinaladi
// console.log(theif)

// console.log(Object.keys(theif).length); objectni massiv ko'rinishga o'tkizib beradi length massiv sonini aniqlaydi

for(let key in theif){
    if(typeof theif[key]==="object"){
        for(let i in theif[key]){
            console.log(`proporty ${i} has value ${theif [key][i]}`);
        };
    }else {
        console.log(`proporty ${key} has value ${theif[key]}`);
    }
}