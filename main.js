module.exports = {
  extends: "eslint-config-standard",
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
};

