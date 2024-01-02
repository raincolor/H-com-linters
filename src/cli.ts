import fs = require('fs');
import p = require('path');

// import inquirer = require("inquirer");
// import chalk = require('chalk');
const l = (msg: string): void => console.log(`h-com-linters - ${msg}`);
const notCopyWhenExistRule = /tsconfig\.json$/;
export  function  create(x:string):void{


  fs.mkdirSync(x)
  if(!fs.existsSync('package.json')){
   
    const originalPackageJson =   fs.readFileSync(p.join(__dirname,'../packageTemp.json'),'utf8');

    fs.writeFile(p.join(x, './package.json'), originalPackageJson, function(err) {
      if(err) {
          console.log('文件创建失败：', err);
      } else {
          console.log('文件创建成功！');
      }
  });
  }


  try {
    fs.cp(
      p.join(__dirname, "../configs"),
      p.join(x),
      {
        recursive: true,
        filter(source, destination) {
          console.log(  p.join(__dirname, "../configs"),x,__dirname,p.join(x),source,destination)
       
          // 不能直接覆盖原有的tsconfig。json
          if (notCopyWhenExistRule.test(source) && fs.existsSync(destination)) {
            l(
              "tsconfig.json already exists, if you want to use the file in h-com-linters, please delete it first"
            );
            return false;
          }
          return true;
        },
      },
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  } catch (e) {
    l("h-com-linters failed to install");
    throw e;
  }


}