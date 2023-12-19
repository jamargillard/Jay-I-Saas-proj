/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
          "oaidalleapiprodscus.blob.core.windows.net",
        "googleusercontent.com",
        "cdn.openai.com"
      ]
    },
  }
  
  module.exports = nextConfig