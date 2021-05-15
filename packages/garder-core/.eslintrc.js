const format = require('prettier-eslint');
module.exports = {
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', //eslint-config-prettier，将与代码格式化相关的规则忽略，将使用prettier-eslint与prettier结合
  ],
  plugins: [
    'import',
    '@typescript-eslint',
    'eslint-plugin-prettier' // 使.prettierc.js整合到eslint，prettier-eslint可以把prettier的format整合到 eslint --fix中
  ],
  rules: {
    "no-console": "warn",
    "@typescript-eslint/no-var-requires": "off",
    "prettier/prettier": "error"// 配套eslint-plugin-prettier //TODO 脚手架加下注释吧。。
  }
};
