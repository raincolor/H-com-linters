// const fs = require('fs');

module.exports = {
  'src/**/*.{js,jsx,ts,tsx,vue}': [
    'eslint --fix',
    'prettier --write',
    // 这个单个检测文件会不会读取tsconfig.json配置导致别名paths检测报错
    // 'vue-tsc --noEmit --skipLibCheck ',
  ],
  //   'src/**/*.{ts,tsx,vue}': () => {
  //     // 函数返回方式会全量检测，并不是只检测staged中的文件
  //     // https://github.com/okonet/lint-staged/issues/468
  //     // https://juejin.cn/post/7124610321617092645
  //     return 'vue-tsc --noEmit --skipLibCheck';
  //   },
  'src/**/*.{scss,less,styl,html,vue}': ['stylelint --fix', 'prettier --write'],
};
