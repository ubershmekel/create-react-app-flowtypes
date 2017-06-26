module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:flowtype/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
        "ecmaVersion": 2017
    },
    "plugins": [
        "react",
        "flowtype",
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],

        // IGNORE
        // allow `console.log`
        "no-console": "off",

        // I don't care if you use single or double.
        "quotes": "off"
    }
};