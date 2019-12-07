module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
      "comma-dangle": 0,
      "semi": ["error", "never"],
      "prefer-rest-params": "off",
      "no-console": "off",
      "no-underscore-dangle": "off",
      "no-unused-vars": "warn",
    },
};
