# h-com-linters Configs

Vue3 项目的 husky + lint-staged + eslint + stylelint + prettier + commitlint 配置集合

# 目 录 结 构
arduino复制代码configs // .husky+commitlint+eslint + stylelint + prettier + commitlint等 配置集合
    -- .husky // git hooks .husky文件配置
    -- .commitlintrc.js // commitlint配置
    -- .eslintignore.ts // eslint忽略配置
    -- .eslintrc.js // eslint配置
    -- .prettierrc.js // prettier配置（美化代码）
    -- .stylelintrc.js // stylelint配置
    --  tsconfig.json // 
lib // 组件编译输出目录
    -- bin.js//  .bin可执行文件入口
    -- index.js // 仓库入口文件 
    -- index.d.ts // 
    -- bin.d.ts//


# 使用

**前置条件 **


1.安装 h-com-linters
```
npm install h-com -linters
```
2.IDE 安装 eslint、stylelint、prettier 插件，用于编码时的提醒
3.在 package.json 中添加

```
// windows
"scripts": {
    "prepare": "h-com-linters install",
}
// mac pre-commit等在mac下不被认可为可执行文件
"scripts": {
    "prepare": "h-com-linters install && chmod +x .husky/*",
}
```

执行（windows 推荐使用 git bash,'h-com-linters install && chmod +x .husky/\*'命令就会不报错）

```
yarn add -D h-com-linters
```

> 注意：更新h-com-linters 也使用上面这条命令，这样才能触发执行 scripts.prepare

h-com-linters 自动会安装相关的依赖包，并将 husky 配置、代码检查相关配置、commit 提交配置都拷贝到项目下。

# 构建 & 发布

目前项目构建使用 semantic-release 自动发布，

发布过程为：

- yarn 安装依赖包
- yarn run build 执行构建（本项目通过配置 scripts: {"prepare": "npm run build"}实现）
- yarn run semantic-release 版本更新并发布

# 实现原理

仿 husky 实现，详细查看：[git commit 代码校验和提交注释校验](https://juejin.cn/post/7297093747702890547)

# 其他问题

1. npm 包中文件行尾是 LF，如果项目本身是 CRLF 行尾，可能需要设置一下: `git config --global core.autocrlf false`
2. 配置完成后，配置没有马上生效，可以重启 IDE
