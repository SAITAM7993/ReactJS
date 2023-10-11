module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
     'no-unused-vars': 'warn', //CON ESTO HAGO QUE EL ERROR no-unused-vars (variables no usadas) se marque como warning y no rompa la app, solo nos tira el aviso
    'react/prop-types' : 'off', //con esto apago, buscar como prenderlo y utilizarlo
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
