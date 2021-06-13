const lodash = require("lodash")

const data1 = [
    {
    "age": 3,
    "name": "Curtis Greene",
    "email": "curtis.greene@zaj.ca",
    },
    {
    "age": 23,
    "name": "Nikki Lowe",
    "email": "nikki.lowe@darwinium.tv",
    },
    {
    "age": 39,
    "name": "Barr Copeland",
    "email": "barr.copeland@nipaz.me",
    },
];
const data2 = [
    {
    "age": 29,
    "name": "Calhoun Woodward",
    "email": "calhoun.woodward@medmex.info",
    },
    {
    "age": 21,
    "name": "Leta Lee",
    "email": "leta.lee@qnekt.com",
    },
    {
    "age": 40,
    "name": "James Dinh",
    "email": "j.dink@erw.com",
    }
];


    // First task
const userIndex = lodash.findIndex(data1, function(o) { return o.age === 23; });


    // Second task
         // Solution 1
const newArray = lodash.concat(data1, data2)

        // Solution 2
const newArr = lodash.unionWith(data1, data2)

    // Third task
const previousObj = {
    "age": 3,
    "name": "Curtis Greene",
    "email": "curtis.greene@zaj.ca",
}

        // Solution 1
const newObjOmit = lodash.omit(previousObj, 'age');
    
        // Solution 2
const newObjPick = lodash.pick(previousObj, 'name', 'email');

        // Solution 3
const newObjPickBy = lodash.pickBy(previousObj, lodash.isString);


    // Fourth task
const defaultObj = {
    "age": 3,
    "name": "Curtis Greene",
    "email": "curtis.greene@zaj.ca",
}

const {age, ...newObj} = defaultObj;
const changedObj = newObj;
   
