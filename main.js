//Fibonacci

const fibonacci = nbr => {
  const fib = [1, 1];
  for (let i = 0; i < nbr - 2; i++) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
};

console.log(fibonacci(7));
