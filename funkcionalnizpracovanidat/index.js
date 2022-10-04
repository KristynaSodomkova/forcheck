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
persons.forEach((ppl) => console.log(ppl.age));

//b
persons.forEach((ppl) => console.log(ppl.name[0]));

//c
console.log(persons.find((que) => que.name === "Adam"));

//d
const whatGender = persons.find((ppl) => ppl.name === "Onyx");
console.log(whatGender.gender);

//e
console.log(persons.findIndex((ppl) => ppl.age === 22));

//f
console.log(numbers.some((num) => num%11 === 0));

//g - nefunguje mi - mělo by mi to vracet true - jsou tam  lidé kteří nejsou ani male ani female
console.log(persons.some((ppl) => !ppl.gender === "male" && !ppl.gender === "female"));

//h
console.log(persons.every((ppl) => ppl.age > 17));