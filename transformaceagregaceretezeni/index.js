const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];
const names = ['Petr', 'Jana', 'Pavel', 'Zuzana', 'Eva', 'Adam', 'Onyx', 'Alex'];
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 22, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
  { name: 'Alex', age: 29, gender: 'androgyne' },
];

//a
const evenNumbers = numbers.filter((num) => num%2 === 0);

console.log(evenNumbers);

//b

const adults = persons.filter((person) => person.age > 17);

console.log(adults);

//c

const dividedByThree = numbers.map((devided) => devided/3);

console.log(dividedByThree);

//d

const numToStr = numbers.map((asStr) => String(asStr));

console.log(numToStr);

//e

const mails = persons.map((mail) => ({email: `${mail.name}@gmail.com`}));
console.log(mails);

//f
const list = persons.map((sb) => `<li>${sb.name} (${sb.age})</li>`);
console.log(list);

//agregace a

document.querySelector("#myList").innerHTML = persons
    .map((who) => `<li>${who.name} (${who.age})</li>`)
    .join("");

//agregace b

document.querySelector("#myListSecond").innerHTML = persons
    .filter((i) => i.age > 17)
    .map((who) => `<li>${who.name} (${who.age})</li>`)
    .join("");

// agregace c

document.querySelector("#myListThird").innerHTML = persons
    .filter((i) => i.age > 17)
    .map((who) => `<li class="${who.gender? who.gender : "nonbinary"}">${who.name} (${who.age})</li>`)
    .join("");