// Code 1 - PRIMITIVES - IMMUTABLE
let foo = 1;
const bar = foo;
console.log(foo === bar); // true
foo = 2;
console.log(foo); // 2
console.log(bar); // 1

// Code 2 - OBJECTS - MUTABLE PROBLEM - BOTH OBJECTS CHANGED
const foo = {value: 1};
const bar = foo;
console.log(foo === bar); // true
foo.value = 2;
console.log(foo); // {value: 2}
console.log(bar); // {value: 2}

// Code 3 - OBJECTS - MUTABLE PROBLEM SOLVED - OBJECT.ASSIGN
const foo = {value: 1};
const bar = Object.assign({}, foo, {value: 2});
console.log(foo === bar); // false
foo.value = 3;
console.log(foo); // {value: 3}
console.log(bar); // {value: 2}

// Code 4 - OBJECTS - MUTABLE PROBLEM SOLVED - SPREAD OPERATOR
const foo = {value: 1};
const bar = {...foo, value: 2};
console.log(foo === bar); // false
foo.value = 3;
console.log(foo); // {value: 3}
console.log(bar); // {value: 2}

// Code 5 OBJECTS - MUTABLE PROBLEM - DEEP OBJECTS
const foo = {some: {deep: {object: 1}}};
const bar = Object.assign({}, foo);

console.log(foo === bar); // false - it's a new object
console.log(foo.some === bar.some); // true - it's the same reference
console.log(foo.some.deep === bar.some.deep); // true - it's the same reference
console.log(foo.some.deep.object === bar.some.deep.object); // true - it's the same reference

foo.some.deep.object = 2;

console.log(foo.some.deep.object); // 2
console.log(bar.some.deep.object); // 2

console.log(foo); // 2
console.log(bar); // 2//const bar = {...foo};

// Code 6 OBJECTS - MUTABLE PROBLEM SOLVED - DEEP OBJECTS
const foo = {some: {deep: {object: 1}}};
const bar = Object.assign({}, foo, {
    some: Object.assign({}, foo.some, {
        deep: Object.assign({}, foo.some.deep, {
                object: 2
            })
        })
    });

// false - it's a new object
console.log(foo === bar);
console.log(foo.some === bar.some);
console.log(foo.some.deep === bar.some.deep);
console.log(foo.some.deep.object === bar.some.deep.object);
console.log(foo.some.deep.object); // 1
console.log(bar.some.deep.object); // 2

console.log(foo); // 1
console.log(bar); // 2

// SAME ABOVE BUT WITH SPREAD OPERATOR
const foo = {some: {deep: {object: 1}}};
const bar  = {
    ...foo,
    some: {
        ...foo.some,
        deep: {
            ...foo.some.deep, 
            object: 2
        },
    }
}
// false - it's a new object
console.log(foo === bar);
console.log(foo.some === bar.some);
console.log(foo.some.deep === bar.some.deep);
console.log(foo.some.deep.object === bar.some.deep.object);
console.log(foo.some.deep.object); // 1
console.log(bar.some.deep.object); // 2
console.log(foo); // 1
console.log(bar); // 2

// IMMUTABLEJS DIFFERENCE
const foo = {some: {deep: {object: 1}}};
const bar  = {
    ...foo,
    some: {
        ...foo.some,
        deep: {
            ...foo.some.deep, 
            object: 1
        },
    }
}
// IF YOU DO NOT CHANGE ANY VALUE, A NEW OBJECT WILL BE CREATED ANYWAY
console.log(foo === bar); // false

const immutable = Immutable.fromJS(foo);
const newImmutable = immutable.setIn(['some', 'deep', 'object'], 1);

// IF YOU DO NOT CHANGE ANY VALUE, THE OBJECT STILL BE THE SAME
console.log(newImmutable === immutable); // true



//IMMUTABLE.JS
// GET
import { fromJS } from 'immutable';

const object = { some: 'value' };

// Get value using normal Javascript
console.log(object.some); // value
console.log(object.value); // undefined

const immutableObj = fromJS(object);

// Using ImmutableJs
console.log(immutableObj.get('some')); // value
console.log(immutableObj.get('nested')); // undefined


//Deep Object

const deepObject = { some: { deep: { object: 'value' } } };

// Get value using normal Javascript
console.log(deepObject.some.deep.object); // value
console.log(deepObject.some.nested.object); // throws error: 'Cannot read object of undefined'

const immutableDeepObj = fromJS(deepObject);

// Using ImmutableJs
console.log(immutableDeepObj.getIn(['some', 'deep', 'object'])); // value
console.log(immutableDeepObj.getIn(['some', 'nested', 'object'])); // undefined - no error thrown

// SET
import { fromJS } from 'immutable';

const object = { some: 'value' };

// Set value using normal Javascript
object.some = 'changed';

const immutableObj = fromJS(object);

// Using ImmutableJs
immutableObj.set('some', 'changed');


//Deep Object

const deepObject = { some: { deep: { object: 'value' } } };

// Set value using normal Javascript
deepObject.some.deep.object = 'changed';

const immutableDeepObj = fromJS(deepObject);

// Using ImmutableJs
immutableDeepObj.setIn(['some', 'deep', 'object'], 'changed');