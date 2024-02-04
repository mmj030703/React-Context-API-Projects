module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "rules": {
    // Add your custom rules here
    "react/prop-types": "off", // Disable prop-types as we use TypeScript for prop type checking
    "react/react-in-jsx-scope": "off", // React is always in scope with Next.js
    // Add other rules as needed
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}

