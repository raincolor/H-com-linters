#!/usr/bin/env node
import p = require("path");
import h = require("./");

// Show usage and exit with code
function help(code: number) {
  console.log(`Usage:
  h-com-linters install
  h-com-linters uninstall
  `);
  process.exit(code);
}

// Get CLI arguments
// process.argv属性会返回一个数组，其中包含当 Node.js 进程被启动时传入的命令行参数。第一个元素是 process.execPath。 第二个元素是正被执行的 JavaScript 文件的路径。 其余的元素是任何额外的命令行参数。
const [, , cmd, ...args] = process.argv;
const ln = args.length;
const [x] = args;

// CLI commands
const cmds: { [key: string]: () => void } = {
  install: (): void => (ln > 1 ? help(2) : h.install(x)),
  uninstall: h.uninstall,
  ["-v"]: () =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-var-requires
    console.log(require(p.join(__dirname, "../package.json")).version),
};

// Run CLI
try {
  // Run command or show usage for unknown command
  cmds[cmd] ? cmds[cmd]() : help(0);
} catch (e) {
  console.error(e instanceof Error ? `h-com-linters - ${e.message}` : e);
  process.exit(1);
}
