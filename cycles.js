//1.Numbers from 10 to 20 with while
let i = 10;
while (i <= 20) {
   console.log(i);
   i++;
}

//2.Square from 10-20

for (let i = 10; i <= 20; i++) {
   console.log(i * i)
}

//3.Multiplication table (7)

let a = 1;
while (a <= 7) {
   console.log(a * 7)
   a++;
}

//4.
let sum = 0;
for (let a = 1; a <= 15; a++) {
   sum += a;
}
console.log(sum)

//5.

let mult = 1;
for (i = 15; i <= 35; i++) {
   mult *= i;
}
console.log(mult)

//6.
let result = 0;
let average = 0;
for (let i = 1; i <= 500; i++) {
   average += i;
   result = average / 500;
}
console.log(result)

//7.
let summ = 0;

for (let i = 30; i <= 80; i++) {
   if (i % 2 === 0) {
      summ += i;
   }
}
console.log(summ)

//8.


for (let a = 100; a <= 200; a++) {
   if (a % 3 === 0) {
      console.log(a)
   }
}

//9,10,11.

let number = 100;

for (let i = 1; i <= 100; i++) {
   if (number % i === 0) {
      console.log(i)
   }
}

//10,11
let count = 0;
let sum2 = 0;
for (let i = 1; i <= 100; i++) {
   if (number % i === 0) {
      if (i % 2 === 0) {
         count++;
         sum2 += i
      }
   }
}
console.log(count) //10
console.log(sum2) //11

//12

for (let i = 1; i <= 10; i++) {
   for (let j = 1; j <= 10; j++) {
      console.log(i * j);
   }
}



//12




