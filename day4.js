//template literals and strings
  
const firstName='kojo';
const job= 'enginner';
const birthYear = 2007;
const year=2035 ;



const kojo = "i'm"+' ' +firstName+',a'+(year-birthYear ) +'  ' +'years old' +' '  +job+'!';
console.log(kojo);

const  kojoNew= `I 'm ${ firstName}, a ${ year-birthYear} yearold ${job};
`
console.log(kojoNew);
console.log(`just a regular string................`)


console.log( `string with\n\
  mutliple\n\
  lines`);

  console.log(`string
    multiple
    lines`);
