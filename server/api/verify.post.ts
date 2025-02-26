import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const storage = useStorage()
  const validText = await storage.getItem('captcha')
  
  return {
    valid: body.code?.toString().toLowerCase() === validText?.toString().toLowerCase()
  }
})