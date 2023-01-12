//1
for (let i = 20; i <= 30; i += 0.5) {
  console.log(i)
}
//2
//One dollar 27UAN , what a great time =)
let oneDollar = 27;
let result = 0;
for (let i = 10; i <= 100; i += 10) {
  result = oneDollar * i;
  console.log(result)
}

//3
// Берем число 1000 

let num = 1000;

for (let i = 1; i <= num; i++) {
  if (i * i <= num) {
    console.log(i)
  }
}

//4
function simpleNumb(numb) {
  for (let i = 2; i < numb; i++) {
    if (numb % i === 0) return false;
  }
  return true;
}

const answer = simpleNumb(5);
console.log(answer)

//5
let number = 81; // задаем число для проверки 
while (number % 3 === 0) {
  number /= 3
}
if (number === 1) {
  console.log('Можно получить')
} else {
  console.log('Нельзя')
}