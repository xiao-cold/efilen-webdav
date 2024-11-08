import WebDAVServer from "@filen/webdav"
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// 加载环境变量
const __dirname = dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: join(__dirname, '..', '.env') })

// 从环境变量获取配置
const config = {
  hostname: process.env.HOST || '0.0.0.0',
  port: parseInt(process.env.PORT || '8888'),
  https: process.env.HTTPS === 'true',
  authMode: process.env.AUTH_MODE || 'basic'
}

const server = new WebDAVServer.default({
  hostname: config.hostname,
  port: config.port,
  https: config.https,
  authMode: config.authMode
})

server
  .start()
  .then(() =>
    console.log(
      `EFilen WebDAV server started on ${config.https ? "https" : "http"}://${
        config.hostname === "0.0.0.0" ? "localhost" : config.hostname
      }:${config.port}`
    )
  )
  .catch(error => {
    console.error("Failed to start server:", error)
    process.exit(1)
  })