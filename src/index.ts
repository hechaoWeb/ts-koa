import  {load} from './config/index.js';
const path = require('path')


load(path.join(__dirname, './config/')).then(res =>{
  require('./app')
})