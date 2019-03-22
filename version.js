// Author Charles GRIMONT
/**
 * Allow us to set package.json version number into c8osdk
 */
const jq = require('node-jq');
const replace = require('replace-in-file');
const fs = require('fs')
const path = require('path');

const filter = '.version'
const pathVersion = './projects/c8osdkangular/package.json' 
const regex = /(["]([0-9]*).[.].([0-9]*)[.]([0-9]*)((-?)(\w*))["])/g
const c8ofile = "./projects/c8osdkangular/src/lib/c8o.service.ts"
const filePath = path.join(__dirname, 'projects', 'c8osdkangular', 'src', 'lib', 'c8o.service.ts');

jq.run(filter, pathVersion, {})
  .then((version) => {    
    fs.readFile(filePath, 'utf8', (err,data) => {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(regex, version);
    if(result.indexOf(version) != -1){
        console.log("[version.js] Regex has worked, version "+ version + " has been setted in the sdk source");
    }
    fs.writeFile(filePath, result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});
  })
  .catch((err) => {
    console.error(err)
  })