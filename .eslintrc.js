module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community',
    'prettier',
    'prettier/react',
    'prettier/standard'
  ],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
