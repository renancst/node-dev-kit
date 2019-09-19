module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true,
        "jest": true,
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "semi": [2, "never"],
        "class-methods-use-this": 0,
        "func-names": ["error", "never"],
        "camelcase": 0,
        "no-param-reassign": 0,
        "max-len": 0,
        "eqeqeq": 0,
        "no-unsafe-finally": 0,
        "no-console": 0,
        "no-plusplus": 0,
        "no-throw-literal": 0,
    }
};