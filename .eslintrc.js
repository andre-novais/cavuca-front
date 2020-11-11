module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/typescript/recommended",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {

  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier/semicolons": 0,
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "semi": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/semi": [2, "never"],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-unused-vars": [
      1,
      { varsIgnorePattern: "^_" }
    ],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-types": 1,
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/member-delimiter-style": [
      2,
      {
        multiline: {
          delimiter: "comma",
          requireLast: false
        },
        singleline: {
          delimiter: "comma",
          requireLast: false
        }
      }
    ]
  }
}
