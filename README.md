# vue-ssr-learn

**实现官方文档中代码，并提供相应示例，仅供学习、测试使用** 
**提供了两种预取数据方式** 

###   启动
yarn build
yarn start

---

### 概要
1. 展示了两种预取数据方法（serverPrefetch、asyncData）
2. 提供了首页按钮点击、列表页、详情页示例

---
### 项目目录结构

```
vue-ssr-learn
├── dist              # 打包后的文件目录
├── node_modules      # 第三方依赖包
├── public            # 公共文件
├── src               # 项目源码
│   ├── server        # 服务端代码
│   ├── app.js        # 入口公共文件
│   ├── entry-client        # 客户端入口
│   ├── entry-server        # 服务端入口
│   ├── index.template.html        # 模版
│   ├── router        # 路由配置目录
│   ├── store         # vuex 的 store
│   └── views         # 项目页面目录
│   │   └── index     # 首页
│   │   └── list      # 列表
│   │   └── detail    # 详情
```
