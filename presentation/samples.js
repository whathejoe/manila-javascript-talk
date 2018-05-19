export const letconst = `var plate = 0;

let spoon;
spoon = 1;

const fork = 3;
// can't re-assign

`;

export const fatArrow1 = `
function double (n) {
  return n * 2;
}

const double = n => n * 2;

`;

export const fatArrow2 = `
devs => { return devs }
// single parameter

(devs, multiplier) => { return devs * multiplier }
// 2 or more need to be enclosed

`;

export const fatArrow3 = `
devs => { return devs }
// explicit return

devs => devs
// implicit return

`;

export const defaultParameters = `
const count = (devs = 3) => devs
count(); // 3

`;

export const stringInterpolation = `
const name = 'Bob';

'My name is ' + name + '.'; // 'My name is Bob.'

\`My name is \${name}.\`; // 'My name is Bob.'

`;

export const computedPropertyNames = `
const getOne = () => 1;

let obj = {
  ['key-' + getOne()]: 42
};

obj['key-1']; // 42

`;

export const propertyShorthand = `
const cheese = 6,
const beef = 4;

let lengths = {
  cheese,
  beef
};

`;

export const arrayMatching = `
let [one, two three] = [1 ,2, 3]
one;    // 1
two;    // 2
three;  // 3

`;

export const valueSwapping = `
let a = 'a';
let b = 'b';

[a, b] = [b, a];

a; // 'b'
b; // 'a'

`;

export const objectDestructuring = `
let employee = {
  id: 32,
  name: ‘Ron Swanson’,
  position: ‘Director’
};

let { name, position } = employee;
name;     // 'Ron Swanson'
position; // 'Director'

`;

export const arrayRest = `
let [one, two, ...rest] = [1, 2, 3, 4];

one;  // 1
two;  // 2
rest; // [3, 4]

`;

export const arraySpread = `
const rgb = ['red', 'green', 'blue'];
const colors = ['white', 'black', ...rgb]

// ['white', 'black', 'red', 'green', 'blue']

`;

// ES7

export const arrayIncludes = `
const devs = ['Ann', 'Pat', 'Mike'];

devs.includes('Ann'); // true
devs.includes('Bob'); // false

`;

export const exponentiationOperator = `
3 ** 2;   // 9
1 ** 100; // 1
2 ** 10;  // ???

`;

// ES8

export const asyncAwait = `
const getUsers = async () => {
  try {
    const users = await apiCallToGetUsers();
    return users;
  } catch (error) {
    console.log(error.stack);
  }
}

`;

export const stringPadding = `
'x'.padStart(3);      // '  x'
'x'.padStart(3, '-'); // '--x'
'x'.padEnd(3, '+');   // 'x++'

`;

// ES9

export const objectRest = `
const obj = { one: 1, two: 2, three: 3 };
const { one, ...rest } = obj;
one;  // 1
rest; // { two: 2, three: 3 }

`;

export const objectSpread = `
const parents = { mom: 1, dad: 1 };
cosnt family = { siblings: 3, ...parents };

// { siblings: 3, mom: 1, dad: 1 }

`;
