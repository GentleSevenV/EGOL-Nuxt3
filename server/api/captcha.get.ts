// server/api/captcha.get.ts
import svgCaptcha from 'svg-captcha-fixed'

export default defineEventHandler(async (event) => {
  const captcha = svgCaptcha.create({
    size: 4,       // 验证码长度
    noise: 2,      // 干扰线数量
    color: true,   // 字符将具有不同的颜色而不是灰色，如果设置了 background 选项，则为 true
    background: '#f0f0f0', // 背景色
    width:100,
    height:38,
    fontSize:46,
  })

  // 存储验证码文本（示例使用内存缓存，生产环境建议用 Redis）
  const storage = useStorage()
  await storage.setItem('captcha', captcha.text)

  return {
    data: captcha.data,  // SVG 字符串
    text: captcha.text   // 仅在开发环境返回（可选）
  }
})