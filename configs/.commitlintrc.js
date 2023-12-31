/*
 * @Description: commit-msg提交信息格式规范
 *
 * commit-msg格式: <type>(scope?): <subject>
 *   - type: 用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？
 *     - build: 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
 *     - chore: 其他修改, 比如改变构建流程、或者增加依赖库、工具等
 *     - ci: 持续集成修改
 *     - docs: 文档修改
 *     - feat: 新特性、新功能
 *     - fix: 修改bug
 *     - perf: 优化相关，比如提升性能、体验
 *     - refactor: 代码重构
 *     - revert: 回滚到上一个版本
 *     - style: 代码格式修改, 注意不是 css 修改
 *     - test: 测试用例修改
 *   - scope：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。
 *   - Subject：一句话描述此次提交的主要内容，做到言简意赅
 */

module.exports = {
  ignores: [commit => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  // rule由name和配置数组组成，如：'name: [0, 'always', 72]'，数组中第一位表示level，可选0,1,2，0为disable，1为warning，2为error，第二位表示是否应用，可选always|never，第三位表示该rule的值。
  rules: {
      'body-leading-blank': [2, 'always'],
      'footer-leading-blank': [1, 'always'],
      'header-max-length': [2, 'always', 108],
      'subject-empty': [2, 'never'],
      //      git提交信息规范
      // feat: 修改/增加新功能 #{禅道需求编号}
      // fix: 修改bug的变更 #{禅道bug编号}
      // docs: 文档相关变更
      // style: 不影响代码含义的变更(空白、格式、缺少符号等)
      // refactor: 代码重构变更 #{禅道需求编号}
      // perf: 改进性能的变更
      // test: 添加/修改现有的测试
      // chore: Build, .gitignore或辅助工具、库(如文档生成)等变更
      // log:添加/修改/删除打印日志，调整日志显示级别等
      'type-enum': [2, 'always', ['docs', 'feat', 'fix', 'style', 'refactor', 'perf', 'test', 'chore', 'log']],
      'type-empty': [2, 'never'], // <type> 不能为空
      // 'type-case': [2, 'always', 'lower-case'], // <type>格式小写
      'type-case': [0],
      'scope-empty': [0],
      // 'scope-case': [2, 'always', 'lower-case'], // <scope> 格式 小写
      'scope-case': [0],
      'subject-empty': [2, 'never'], // <subject> 不能为空 (默认)
      // 'subject-full-stop': [2, 'never', '.'], // <subject> 以.为结束标志
      'subject-full-stop': [0, 'never'],
      // 'subject-case': [2, 'never', 'lower-case'],
      'subject-case': [0, 'never'],
      // case可选值
      // 'lower-case' 小写 lowercase
      // 'upper-case' 大写 UPPERCASE
      // 'camel-case' 小驼峰 camelCase
      // 'kebab-case' 短横线 kebab-case
      // 'pascal-case' 大驼峰 PascalCase
      // 'sentence-case' 首字母大写 Sentence case
      // 'snake-case' 下划线 snake_case
      // 'start-case' 所有首字母大写 start-case

      'header-max-length': [0, 'always', 72], // header 最长72
      // 'body-leading-blank': [2, 'always'], // body换行
      // 'footer-leading-blank': [1, 'always'], // <footer> 以空行开头
  },
}
