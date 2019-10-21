module.exports = {
  extends: [
    "eslint-config-react-app",
    "standard",
    "plugin:flowtype/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
    'eslint:recommended',
  ],
  "parser": "babel-eslint",
  plugins: [
    "flowtype",
    "react",
    "prettier",
    "standard"
  ],
  rules: {
    "jsx-a11y/href-no-hash": "off",
    'react/no-string-refs':'off',
    'no-console': 'warn',
    'semi': ["error", "never"]
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  }
}