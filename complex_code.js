/* 
   Filename: complex_code.js
   Description: This code implements a complex algorithm for finding prime numbers using the Sieve of Eratosthenes.
*/

// Function to find all prime numbers up to a given limit
function findPrimes(limit) {
  // Create a boolean array to track prime numbers
  let primes = new Array(limit + 1).fill(true);
  
  // 0 and 1 are not prime
  primes[0] = primes[1] = false;

  // Check every number up to square root of the limit
  for (let i = 2; i * i <= limit; i++) {
    // If the current number is prime
    if (primes[i]) {
      // Mark all multiples of i as non-prime
      for (let j = i * i; j <= limit; j += i) {
        primes[j] = false;
      }
    }
  }

  // Store the prime numbers in an array
  let primeNumbers = [];
  for (let i = 2; i <= limit; i++) {
    if (primes[i]) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

// Function to calculate the sum of digits in a number
function calculateDigitSum(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

// Function to check if a number is prime or not
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Main function to demonstrate the complex code
function main() {
  let limit = 1000;
  let primes = findPrimes(limit);

  for (let i = 0; i < primes.length; i++) {
    let prime = primes[i];
    let digitSum = calculateDigitSum(prime);

    if (isPrime(digitSum)) {
      console.log(prime);
    }
  }
}

// Call the main function
main();