# simple-node-web
简单的node web项目

### 启动
1. 本地安装好node后，进入simple-node-web目录，执行```npm install```安装依赖。
2. 执行```node app.js```启动服务器。
3. 访问<http://localhost:3000>即可。

### 环境配置
在本地/data/env/appenv配置环境,使用json字符串,默认为qa环境.
环境参数appenv,测试qa,线上product.
示例:
```
{
	"appenv":"product"
}
```

