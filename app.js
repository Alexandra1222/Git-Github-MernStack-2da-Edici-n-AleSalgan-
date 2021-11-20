// const cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "Hola MUUUUUUUUUUUUUUndo",
//     e : "UU",
//     T : "W"
// }));

const countries = require('./countries.json');
const argentina = countries[10];


/*  show translate the country code through your iso3 code*/
function getCountryByIso3(iso){
    return countries.filter((country)=>country.iso3===iso);
}

/* get the translated name of the country */
function getCountryTranslatedName(iso , transl ){
    let C =  countries.filter((country)=>country.iso3===iso);
    let {transl} = C[0]
    return Object.fromEntries(Object.entries(translations).filter(([key]) => key.includes(transl)));
}

/* get the countries through their subregion */
function  getCountriesBySubregion(subr){
    return countries.filter((country)=>country.subregion===subr);
}


function main(){
   console.log(
        '//////ejercicio 1,`////\n',
        getCountryByIso3('ARG'),
        '\n');

    
     console.log(
            '////ejercicio 2 ////\n',
            getCountryTranslatedName('ARG','it'),
            '\n');
    
    console.log(
            '////ejercicio 3 ////\n',
            getCountriesBySubregion('South America'),
           '\n');
    
    

}

console.log(argentina);