module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true,
    },
    "extends": [
        "eslint:recommended",
        "airbnb-base",    
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-new": 0,
        "class-methods-use-this": 0,
        "import/prefer-default-export": 0,
    }
};