// Author Charles GRIMONT
/**
 * Allow us to set package.json version number into c8osdk
 */
const jq = require('node-jq');
const fs = require('fs')
const path = require('path');

const filter = '.version'
const pathVersion = './projects/c8osdkangular/package.json';
const regex0 = /(["]([0-9]*).[.].([0-9]*)[.]([0-9]*)((-?)(\w*))["])/g
const regex1 = /(["][v][e][r][s][i][o][n]["][:][ ]["]([0-9]*).[.].([0-9]*)[.]([0-9]*)((-?)(\w*))["])/g
const c8ofile = "./projects/c8osdkangular/src/c8osdk-angular-core/lib/c8o.service.ts"
const filePathAng = [path.join(__dirname, 'projects', 'c8osdkangular', 'src', 'c8osdk-angular-core' ,'lib', 'c8o.service.ts'), path.join(__dirname, 'projects', 'c8osdkangular', 'packages', 'packageANG5.json'), path.join(__dirname, 'projects', 'c8osdkangular', 'packages', 'packageANG6.json'),path.join(__dirname, 'projects', 'c8osdkangular', 'packages', 'packageANG7.json'),path.join(__dirname, 'projects', 'c8osdkangular', 'packages', 'packageANG8.json'), path.join(__dirname, 'projects', 'c8osdkangular', 'packages', 'packageANG9.json'), path.join(__dirname, 'projects', 'c8osdkangular', 'packages', 'packageANG10.json')];

// Get version and trans
const getAndTrans = (regex,versiAppend, path, path2)=>{
  jq.run(filter, path, {})
  .then((v) => {
    let version = versiAppend + v;
    fs.readFile(path2, 'utf8', (err,data) => {
      if (err) {
          return console.log(err);
      }
      var result = data.replace(regex, version);
      if(result.indexOf(version) != -1){
          console.log("[version.js] version "+ version + " has been written in " + path2);
      }
      fs.writeFile(path2, result, 'utf8', function (err) {
          if (err) return console.log(err);
      });
    });
  })
  .catch((err) => {
    console.error(err)
  })
};

  getAndTrans(regex0, "", pathVersion, c8ofile);
  for(let path of filePathAng){
    getAndTrans(regex1, '"version": ', pathVersion, path)
  }