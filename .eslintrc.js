module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "google"],
    "rules": {
        "semi": "off",
        "arrow-parens": "off",
        "comma-dangle": "off",
        "require-jsdoc": "off",
        "linebreak-style": 0,
        "operator-linebreak": "off"
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "parser": "babel-eslint"
};