
# ts-koa

`koa`+`typescript`的简单脚手架
简单的用了点修饰器，主要用于自己写一下简单的js项目
后续会持续完善此脚手架


## 项目结构

```
.
├── src
│   ├── controller      //controller层
│   ├── middleware      //中间件层
│   ├── service         //service层
│   ├── routes.ts       //路由
│   └── index.ts        //项目入口index.js
├── nodemon.json        //nodemon配置
├── package.json
└── tsconfig.json
```

## 使用

- npm start
- 在浏览器中开打`127.0.0.1:3000`

### 打包

- npm run build

### PM2启动

- 生产环境使用 pm2 启动 可以达到负载均衡 执行：yarn pro 或 npm run pro （生产环境端口默认：8080）

### DOCKER启动

- docker stop ts-koa

- docker rm ts-koa

- docker build --pull -f "Dockerfile" -t ts-koa:latest "."

- docker run  -p 3003:3003 --name ts-koa -d ts-koa:latest