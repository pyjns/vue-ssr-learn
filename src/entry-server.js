import { createApp } from './app.js'

export default context => {
  return new Promise((resolve, reject) => {

    const { app, router, store } = createApp(context);

    router.push(context.url)

    router.onReady(() => {
      console.log("----entry-server.js router.onReady----")

      // 获取数据方式1- 调用匹配路由的serverPrefetch方法
      // context.rendered = () => {
      //   context.state = store.state
      // }
      // resolve(app)



      const matchedComponents = router.getMatchedComponents()

      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }

      // 获取数据方式2-对所有匹配的路由组件调用 `asyncData()`
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        context.state = store.state
        resolve(app);
      }).catch(reject)

    }, reject)
  })
}