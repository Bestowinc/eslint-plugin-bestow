module.exports = {
  configs: {
    twentyTwenty: {
      env: {
        browser: true,
        es6: true,
        jest: true
      },
      extends: ["airbnb", "eslint-config-prettier"],
      plugins: ["eslint-plugin-prettier"],
      rules: {
        "import/prefer-default-export": [0, false],
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [0, false],
        "react/jsx-props-no-spreading": [0, false],
        "react/prop-types": [0, false]
      }
    }
  }
};
