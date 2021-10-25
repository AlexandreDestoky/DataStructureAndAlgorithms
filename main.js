//Fibonacci------------------------------------------------------
const fibonacci = nbr => {
  const fib = [1, 1];
  for (let i = 0; i < nbr - 2; i++) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
};

// console.log(fibonacci(7));

//2 plus petits nombres d'un tableau--------------------------------
const twoSmallestNbr = tab => tab.sort((a, b) => a - b).slice(0, 2);

const test = [85, 2, 35, 68, 7, 47];

// console.log(twoSmallestNbr(test));

// Trouver nombre itérations tableau partie test------------------------------
const personne = ["Jean", "Patrick", "Jean", "Jean", "Thomas", "Jean", "Jean"];

const nbrInTab = (tab, mot) => {
  let cpt = 0;
  for (const el of tab) {
    if (el === mot) cpt++;
  }
  return cpt;
};
// console.log(nbrInTab(personne,"Jean"));

//Comparer si valeur en commun dans 2 tableau----------------------------
const compare2Array = (tab1, tab2) => {
  tab1 = [...new Set(tab1)];
  tab2 = [...new Set(tab2)];
  return tab1.some(el => tab2.includes(el));
};

let testTab = ["a", "b", "c"];
let testTab2 = ["d", "e", "f", "f", "cj"];
// console.log(compare2Array(testTab, testTab2));

// Fonction Factorielle -----------------------------------
const Factorielle = nbr => {
  if (nbr === 1) return 1;
  return nbr * Factorielle(nbr - 1);
};

console.log(Factorielle(7));
