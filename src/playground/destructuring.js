// object destructuring
// const  person = {
//   name: 'Jane',
//   age: 26,
//   location : {
//       city: 'SF',
//       temp: 92
//   }
// };
//
// const { name: firstname = 'Anonymous', age } = person;
// console.log(`${firstname} is ${age}`);
//
// const { city, temp: temperature } = person;
// console.log(`It's ${temperature} in ${city}`);

// array destructuring
const address = ['1197 w 36th St', 'Los Angeles', 'CA', '90007'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`);

