module.exports = {
  configs: {
    parity: {
      rules: {
        "no-multiple-empty-lines": [0, false],
        "brace-style": [2, "stroustrup"],
        "generator-star-spacing": [2, {
          "before": false,
          "after": true,
          "anonymous": "neither",
          "method": {
            "before": true,
            "after": true
          }
        }],
        "indent": [2, 2],
        "quotes": [2, "double"],
        "semi": [2, "always"],
        "semi-style": [2, "last"],
        "space-before-function-paren": [0, false]
      }
    },
    env: {
      "browser": true,
      "es6": true,
      "jest": true
    },
    extends: ["airbnb", "prettier"],
    plugins: ["prettier"],
    twentyTwenty: {
      rules: {
        "one-var": [0, false],
        "comma-dangle": [0, false],
        "generator-star-spacing": [1, {
          "before": true,
          "after": true
        }],
        "import/prefer-default-export": [0, false],
        "react/jsx-filename-extension": [0, false],
        "react/jsx-props-no-spreading": [0, false],
        "react/prop-types": [0, false],
        "prettier/prettier": "error"
      }
    }
  }
};
