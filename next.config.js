/** @type {import('next').NextConfig} */
require('next-transpile-modules')(['echarts', 'zrender'])
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'lh3.googleusercontent.com'],
  },
  env: {
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET
  }
}
