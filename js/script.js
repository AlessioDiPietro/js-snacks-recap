// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.
// Es: 
// a[2,11,6,77,3,4,9];
// a = 1;
// b = 3;
// mi restituisce a [11,6,77]

const a = 1;
const b = 3;
let oldArray = [2,11,6,77,3,4,9];

const newArray2 = controllo(a,b,oldArray)

console.log(newArray2);
console.log(controllo(a,b,oldArray));


// function controllo (numIn, numFin, array) {
//     const newArray = [];
//     array.forEach((element,index )=> {
//         if (index >=  numIn && index <= numFin) {
//             newArray.push(element);
//         };
//     });

//     return newArray;
// };


function controllo (numIn, numFin, array) {     

    return array.filter((element, index) => {
        return (index >=  numIn && index <= numFin);
        
    });

    return array.filter((element, index) => (index >=  numIn && index <= numFin) );
};

console.log();
