const deepMapKeys = (obj) => Array.isArray(obj) ? obj.map(item => deepMapKeys(item)) : typeof obj == 'object' ? Object.keys(obj).reduce((acc, currentKey) => {
    const val = obj[currentKey]
        acc[currentKey] = val !== null && typeof val === 'object' ? deepMapKeys(val) :  val
        return acc;
    }, {}) : obj;

// EXAMPLE

const obj = {
    foo: '1',
    nested: {
        childe: {
            withArray: [
                {
                    grandChild: ['hello']
                }
            ]
        }
    },
    arrays: [
        {name: 1},
        {name: 1},
        {name: 1},
        {name: 1},
        {name: 1},
        {name: 1},
    ]
};

const testArr = [
    {name: 1},
    {name: 1},
    {name: 1},
    {name: 1},
    {name: 1},
    {name: 1},
]

const upperKeysObj = deepMapKeys(obj);
const upperKeysTest = deepMapKeys(testArr);


console.log('upperKeysObj =====', JSON.stringify(upperKeysObj, null, 2))
console.log('upperKeysTest =====', JSON.stringify(upperKeysTest, null, 2))



