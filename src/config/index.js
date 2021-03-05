const YAML = require('yamljs')
const  nconf =require('nconf')
nconf.argv().env();

exports.load = function(appName) {
  
  let fileName = "default.yml";
  // 读取本地配置
  if(process.env && process.env.nodeEnv === 'test'){
    fileName = "test.yml";
  }else if(process.env && process.env.nodeEnv === 'pro'){
    fileName = "pro.yml";
  }
  return new Promise((resolve,reject) => {
    const dataYML = YAML.load( appName + fileName)
    nconf.defaults(dataYML);
    resolve()
  })
}

exports.config = nconf;