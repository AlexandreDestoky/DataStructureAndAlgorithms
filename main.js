//Fibonacci
const fibonacci = nbr => {
  const fib = [1, 1];
  for (let i = 0; i < nbr - 2; i++) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
};

console.log(fibonacci(7));


//2 plus petits nombres d'un tableau
const twoSmallestNbr = (tab) => tab.sort((a,b) => a-b).slice(0,2);

const test = [85,2,35,68,7,47];

console.log(twoSmallestNbr(test));


// Trouver nombre itérations tableau partie test 
const personne = ["Jean","Patrick","Jean","Jean","Thomas","Jean","Jean"];

const nbrInTab = (tab,mot) => {
  let cpt = 0;
  for (const el of tab) {
    if(el === mot) cpt++;
  }
  return cpt;
}
console.log(nbrInTab(personne,"Jean"));