极客公园招聘专题
======

[![MIT License](https://img.shields.io/github/license/mashape/apistatus.svg)]()

### 安装
`npm i`

### 开发
`npm start`

### 发布
`npm run deploy`

### 动态数据修改
https://github.com/GeekPark/update_join_us

### cron job
为了解决访问速度以及 github api 60/hours 访问限制的问题，需要每天定时 fetch gist data to local `data.json`，所以本地测试的时候要手动将测试数据下载到 `./build`

`$ curl https://api.github.com/gists/f1fac66eee98d3a31c49 -o build/data.json`
