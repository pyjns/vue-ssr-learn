const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('../dist/server/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/client/vue-ssr-client-manifest.json')



const server = express()
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: require('fs').readFileSync('./src/index.template.html', 'utf-8'),
  clientManifest
})


function renderToString(context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      if (err) {
        reject(err)
        return
      }
      resolve(html)

    })
  })
}

server.use(express.static('./dist/client'))

server.get('*', async function (req, res) {

  try {
    const html = await renderToString({
      title: "ssr-test",
      url: req.url
    })
    res.send(html)
  } catch (error) {
    res.status(500).send('Error 500 ')
  }
})

server.listen(8003, () => {
  console.log('server/index.js ready to fly');
  console.log('http://localhost:8003/');
})