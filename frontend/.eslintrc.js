module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    "no-restricted-globals": ["error"].concat(
      require("confusing-browser-globals")
    ),
    "no-unused-vars": "warn",
    eqeqeq: "error",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[arguments.length=1] > MemberExpression.callee > Identifier.property[name='reduce']",
        message: [
          "Please provide an initial value when using .reduce() to avoid runtime errors",
          "https://github.com/eslint/eslint/issues/12868#issuecomment-581515841",
          "https://github.com/microsoft/vscode-eslint/issues/888",
        ].join("\n"),
      },
      {
        selector: 'NewExpression[callee.name="Date"][arguments.length=1]',
        message: [
          "Parsing dates using `new Date(string | number)` is inconsistent between browsers and could lead to unexpected errors (eg: on old Safari versions).",
          "Please use `date-fns parse()` or `date-fns fromUnixTime()` instead.",
        ].join("\n"),
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "lodash",
            message:
              "Please use path import 'lodash/*' or import from 'lodash-es' to support tree-shaking.",
          },
          {
            name: "lodash/chain",
            message:
              "Please do not use _.chain() as it doesn't support tree-shaking.",
          },
          {
            name: "lodash-es",
            importNames: ["chain"],
            message:
              "Please do not use _.chain() as it doesn't support tree-shaking.",
          },
        ],
      },
    ],
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
};
